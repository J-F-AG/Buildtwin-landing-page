import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GlobalService } from 'src/app/services/GlobalService';

@Component({
  selector: 'app-om-footer',
  templateUrl: './om-footer.component.html',
  styleUrls: ['./om-footer.component.scss']
})
export class OmFooterComponent {
  formData:any;
  sucessMessage:boolean=false;
  error:boolean=false;
  getFormData = new FormGroup({
    // full_name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required,Validators.email]),
    // name: new FormControl('', [Validators.required]),
    // company_name: new FormControl('', [Validators.required]),
    // promotional: new FormControl('', [Validators.required]),
   
  });
  constructor(public __GlobalService: GlobalService) {}

  free_trial() {
    if (!this.getFormData.invalid){
      this.formData = this.getFormData.value;
      this.formData = {...this.formData,subscription_type: "subscription"}
      console.log(this.formData);
      
      this.__GlobalService.saveUser(this.formData).subscribe((response: any) => {
        console.log(response);
        if(response.statusCode == 200){
         this.getFormData.reset()
         
         this.sucessMessage = true
         setTimeout(()=>{
          this.sucessMessage = false
         },2000)
        }
        else{
          this.error =true
          
        }
       
      });
    }
  
  }
}
