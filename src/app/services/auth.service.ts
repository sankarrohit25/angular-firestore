import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import {AngularFireAuth} from 'angularfire2/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afs:AngularFirestore, private auth:AngularFireAuth) { }

  signUp(obj){
    console.log('In auth service');
    this.auth.auth.createUserWithEmailAndPassword(obj.email, obj.password).then((val)=>{
      console.log(val);
    }).catch((err) => {
      console.log(err.toString());
    })
  }

}
