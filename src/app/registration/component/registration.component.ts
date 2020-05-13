import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/get-userlist';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {User} from '../../services/userlistClass';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup;
  submitted = false;
  private successResp;
  constructor(private userService:UserService,private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loadForm();
    
  }
  loadForm()
  {
    this.registrationForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['']
    }, 
  );
  }
  onSubmit() {
   const emailVal = this.registrationForm.value.email;
   const password = this.registrationForm.value.password;
   const registrationObj = {
    "email": emailVal,
    "password": password
}
   this.userService.registerUser(emailVal).subscribe((resp) => 
   { 
     this.successResp = resp;
   
   });
  }
}

/*
this.userService.getUsers().subscribe((users:any)=> 
    {
      this.postDataListing = users ;
      console.log(this.postDataListing, 'this.postDataListing');
      this.dataArray = this.postDataListing['data'];
   
    });
*/