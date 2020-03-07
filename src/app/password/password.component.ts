import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { CrudServiceService } from '../crud-service.service';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {
 errMsg:any ='';
  constructor(private auth:AuthService, private crud:CrudServiceService) { }

  ngOnInit() {
  }

  change_password(pass, npass, cnpass){
    if(pass=="" || npass=="" || cnpass ==""){
      this.errMsg = "Please enter all fields";
    }
    else if(pass==npass){
      this.errMsg ="Please enter diff new password";
    }
    else if(cnpass != npass){
      this.errMsg ="new pass and cnew pass mismatch"
    }
    else{
      let curUserEmail = this.auth.getval();
      //console.log("current user: " + curUserEmail);

      this.crud.myfunction("userDetails").subscribe(
        (res)=>{
          var counter =0;
          for(let key in res){
            console.log(res[key]);
            if(res[key]['email'] == curUserEmail){
              var dbCurPass= res[key]['password'];
              //console.log(dbCurPass);
              counter++;
              break;
            }
          }

          if(counter>0){
            if(dbCurPass!=pass){
              this.errMsg = "Current password mismatch";
            }
            else{
              var record = this.auth.getAllVal();
              console.log( "record");
              console.log( record);
              record['password'] = npass;
             // console.log(record);

             var id = this.auth.getUserId();
             console.log(id);

             this.crud.update(record, "userDetails", id).subscribe(
               (res)=>{
                 this.errMsg = "Password updated";
               }
             )
            }
          }
        }
      )
    }
  }
}
