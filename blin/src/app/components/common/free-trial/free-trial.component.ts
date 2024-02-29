import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GlobalService } from 'src/app/services/GlobalService';

@Component({
  selector: 'app-free-trial',
  templateUrl: './free-trial.component.html',
  styleUrls: ['./free-trial.component.scss']
})
export class FreeTrialComponent {

  formData:any;
  sucessMessage:boolean=false;
  error:boolean=false;
  getFormData = new FormGroup({
    full_name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required,Validators.email]),
    company_name: new FormControl('', [Validators.required]),
    promotional: new FormControl(false),
   
  });

  constructor(public __GlobalService: GlobalService) {}

  free_trial() {
    if (!this.getFormData.invalid){
     
      this.formData = this.getFormData.value;
    let  {promotional}  = this.formData
    if(promotional === null){
      this.formData = {...this.formData,promotional:false}
    }
      this.formData = {...this.formData,subscription_type: "free_trial"}
      console.log(this.formData);
      
      this.__GlobalService.saveUser(this.formData).subscribe((response: any) => {
        console.log(response);
        if(response.statusCode == 200){
         this.getFormData.reset()
         this.sucessMessage = true
         setTimeout(()=>{
          this.sucessMessage = false
         },3000)
        }
        else{
          this.error =true
          
        }
       
      });
    }
  
  }
}

