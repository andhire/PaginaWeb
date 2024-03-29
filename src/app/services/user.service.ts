import { User } from './../interfaces/user';
import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private angularFireDatabase:AngularFireDatabase) { }
  

  createUser(user:User){
    return this.angularFireDatabase.object('/users/'+user.uid+"/").set(user);
  }

  createCV(cv:any){
    return this.angularFireDatabase.object('/cv/'+cv.id+"/").set(cv);
  }
}
