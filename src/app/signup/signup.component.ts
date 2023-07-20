import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor( private http:HttpClient){}
  // onSubmit(data:{}){
  //   this.http.post('http:localhost:5000/user',data)
    
  // }
  onSubmit(form: NgForm){
    console.log(form.value);
  }
}
