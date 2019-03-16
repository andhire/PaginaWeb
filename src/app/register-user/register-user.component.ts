import { UserService } from './../services/user.service';

import { AuthenticationService } from './../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { auth } from 'firebase';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  email:string = null;
  password:string = null;
  username:string;
  name:string;

  constructor(private authenticationService:AuthenticationService,private userService:UserService) {

   }

  ngOnInit() {
    
  }

  
  registerWithEmail(){
    this.authenticationService.registerWithMail(this.email,this.password).then(
      (data)=>{
        const user ={
          username:this.username,
          email:this.email,
          name:this.name,
          uid:data.user.uid
      
        }
        
        console.log(data);
        this.userService.createUser(user).then((data)=>{
          alert("Registro correcto");
            console.log(data);

            auth().currentUser.sendEmailVerification().then((data)=>{
              console.log("Se envio confirmacion");
            }).catch((data)=>{
              console.log("No se envio confirmacion");
        
            });


        }).catch((error)=>{
            alert("Hubo un error,crear usuario");
            console.log(error);
        });
        
      }).catch((error)=>{
        alert("Hubo un error crear correo");
        console.log(error);
      });
  }

  loginWithEmail(){
    this.authenticationService.loginWithMail(this.email,this.password).then(
      (data)=>{
        
        
      }).catch((error)=>{
        alert("Hubo un error");
        console.log(error);
      });
  }

  loginWithFb(){
    this.authenticationService.registerWithFb().then(
      (data)=>{

        console.log(data)
        if(data.additionalUserInfo.isNewUser){
          const user ={
            username:data.user.displayName,
            email:data.user.email,
            name:data.user.displayName,
            uid:data.user.uid
        
          }
          console.log("Aqui entro segun :v")
          this.userService.createUser(user).then((data1)=>{
            alert("Registro correcto");
              console.log(data1);
  
              
  
  
          }).catch((error)=>{
              alert("Hubo un error,crear usuario");
              console.log(error);
          });
        }else{
          alert("Login Correcto")
        }
        
      }).catch((error)=>{
        alert("Hubo un error");
        console.log(error);
      });
  }
  loginWithGoogle(){
    this.authenticationService.registerWithGoogle().then(
      (data)=>{
        const cv ={
          idiomas: "Ingles",
          porcentaje: 100,
          x:1,
          id:data.user.uid
      
        }
        this.userService.createCV(cv).then(
          (data)=>{
            
            
          }).catch((error)=>{
            
          });
      }).catch((error)=>{
        alert("Hubo un error");
        console.log(error);
      });

      

  }

}
