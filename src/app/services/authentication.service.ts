
import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private angularFireAuth:AngularFireAuth) { }

  loginWithMail(email:string,password:string){
    return this.angularFireAuth.auth.signInWithEmailAndPassword(email,password);
  }

  registerWithMail(email:string,password:string){
    return this.angularFireAuth.auth.createUserWithEmailAndPassword(email,password);
  }

  
  
  
}
