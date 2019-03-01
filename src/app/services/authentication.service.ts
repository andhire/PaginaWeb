
import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { auth } from 'firebase';

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

  registerWithFb(){
    return this.angularFireAuth.auth.signInWithPopup(new auth.FacebookAuthProvider());
  }
  

  registerWithGoogle(){
    return this.angularFireAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }
  
}
