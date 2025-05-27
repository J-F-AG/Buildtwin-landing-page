import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadChangeParam, NzUploadFile } from 'ng-zorro-antd/upload';
import { of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-file-upload-service',
  templateUrl: './file-upload-service.component.html',
  styleUrls: ['./file-upload-service.component.scss']
})
export class FileUploadServiceComponent implements OnInit {
  @Input()
  data;
  uploaded = false;
  showPageLoader = false;
  filename = [];
  filenameShow = [];
  files = [];
  fileList: NzUploadFile[] = [];
  fileUploadList: any= [];
  totalFiles = 0;
  totalFilesUploaded = 0;
  @Output() fileUploadedStatus: EventEmitter<any> = new EventEmitter();


  constructor(private msg: NzMessageService, private _http: HttpClient) { }

  ngOnInit(): void {
    // let data = this.data.bookingdata.files;
    // if (data && data['filename'] && data['filename'].length) {
    //   this.filename = data['filename'].map(a => a.file_name);
    //   this.filenameShow = JSON.parse(JSON.stringify(this.filename));
    // }
    // if (data && data['files'] && data['files'].length) {
    //   this.files = data['files'];
    // }
  }
  ngOnChanges(changes: SimpleChanges) {
    if(changes['data'] && changes['data'].currentValue?.message) {
      console.log('data', this.data)
      this.loopUpload()
    }
    console.log('changes', changes)
  }
  delete(idx) {
    if (idx > -1) {
      this.fileUploadList.splice(idx, 1); // Remove file from fileUploadList
      this.filenameShow.splice(idx, 1);   // Remove filename from filenameShow
    }
    // this.files = this.files.filter((a, i) => i !== idx);
    // let payload = {
    //   "booked_service_id": this.data.data.bookingId,
    //   "key": this.files
    // };
    // this._http.post(`https://zcv2dkxqof.execute-api.ap-southeast-1.amazonaws.com/production/marketplaceBookService/add-attachment`,
    //   payload)
    //   .pipe(
    //     catchError(err => {
    //       console.error('Error occurred:', err);
    //       return of(err); // Wrap error in observable
    //     })
    //   )
    //   .subscribe(res => {
    //     console.log('Response:', res); // Handle the response
    //     this.showPageLoader = false;
    //     if (res && res['statusCode'] === 200) {
    //       this.fileUploaded.emit({ file: false, filename: this.filename, files: this.files });
    //     } else {
    //       this.msg.create('error', "Something went wrong")
    //     }
    //   });
  }

  async handleChange({ file, fileList, type }: NzUploadChangeParam) {
    if (type === 'start') {
      let obj = {
        file: file,
        type: type
      }
      this.fileUploadList.push(obj)
      this.filenameShow.push(file.name);
    }
  }
  loopUpload() {
    this.fileUploadList.forEach((file, index) => {
      this.uploadFile(file.file, file.type);
    });
  }
  async uploadFile(file: any, type: any) {
      this.totalFiles += 1;
      this.showPageLoader = true;
      this.uploaded = true;
      const extension = file.name.split('.').pop();
      file['uuid'] = uuidv4();
      file['isDone'] = 0;
      file['ext'] = extension;
      let infoS3: any = {};

      var m = new Date();
      var dateString =
        m.getUTCFullYear() +
        ("0" + (m.getUTCMonth() + 1)).slice(-2) +
        ("0" + m.getUTCDate()).slice(-2);
      let folderName = 'resource';
      infoS3['key'] = `${folderName}/privateS3/upload/business-listing-image/${dateString}/${file.name}`;
      // Get presigned URL from the server
      this._http.post(`https://m5u5u5a5c8.execute-api.ap-southeast-1.amazonaws.com/production/dynamicFileUpload`,
        infoS3, this.getHeader())
        .pipe(
          catchError(err => {
            console.error('Error occurred:', err);
            return of(err); // Wrap error in observable
          })
        )
        .subscribe(async res => {
          console.log('Response:', res); // Handle the response

          res = JSON.parse(res.body);

          if (res['attachment_info']) {
            file['inline_attachment_id'] = res['attachment_info']['id'];
          }

          // Upload file to S3
          await this.uploadFileS3(res['presigned_url'], file['originFileObj']).toPromise();
          let fileUrl = res['presigned_url'].split("?")[0];
          let payload = {
            "booked_service_id": this.data['bookingId'],
            "key": [
              {
                fileUrl: fileUrl,
                file_name: file.name
              }
            ]
          };
          this._http.patch(`https://zcv2dkxqof.execute-api.ap-southeast-1.amazonaws.com/production/marketplaceBookService/add-attachment`,
            payload,this.getHeader())
            .pipe(
              catchError(errChild => {
                console.error('Error occurred:', errChild);
                return of(errChild); // Wrap error in observable
              })
            )
            .subscribe(resChild => {
              console.log('Response:', resChild); // Handle the response

              // this.showPageLoader = false;
              if (resChild && resChild['statusCode'] === 200) {
                // this.filename.push(file.name);
                // this.files.push({
                //   fileUrl: fileUrl,
                //   file_name: file.name
                // })

                // let updatedArray = this.filename.filter(item => this.filenameShow.includes(item));

                // this.filenameShow = updatedArray
                // this.data.bookingdata.files = {
                //   filename: this.filename
                // }

                // localStorage.setItem('bookingservice', JSON.stringify({file: this.filename}));
                // this.msg.success(`${file.name} file uploaded successfully.`);
                this.totalFilesUploaded += 1;
                if (this.totalFiles === this.totalFilesUploaded) {
                  this.showPageLoader = false;
                  this.fileUploadedStatus.emit('uploaded');
                }
              } else {
                this.msg.create('error', "Something went wrong")
              }
            });
        });
  }


  uploadFileS3(url: any, fileObject: any) {

    let headers = {
      observe: "response", // to display the full response


    };
    return this._http.put<any>(`${url}`, fileObject,
      { observe: 'response', reportProgress: true }).pipe(
        map((res) => {
          return res.headers.get("etag");
        })
      );
  }

// ***************** API all methods start *****************//
getHeader() {

  try {
    var httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem("IdToken") ? String(localStorage.getItem("IdToken")) : ''
      })
    };
  } catch (error) {
    
  }
  return httpOptions;
}
}
