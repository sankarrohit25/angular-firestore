import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private as:AuthService) { }

  ngOnInit(): void {
    console.log('This is signup');
  }

  signUp(obj){
    console.log(obj);
    console.log('In .ts');
    this.as.signUp(obj);
  }

}
