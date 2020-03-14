import {FormGroup} from '@angular/forms';

export function MustMatch(pass:string, cpass:string){
    return(formGroup : FormGroup)=>{
        let password = formGroup.controls[pass];
        let cpassword = formGroup.controls[cpass];
        console.log(password.value, cpassword.value);


        if(cpassword.errors && !cpassword.errors.passMatch){
            return;
        }

        if(cpassword.value != password.value){
            cpassword.setErrors({passMatch:true});
        }
        else{
            cpassword.setErrors(null);
        }
    }
}