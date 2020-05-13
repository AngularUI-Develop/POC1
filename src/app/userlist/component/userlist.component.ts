import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/get-userlist';
@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  postDataListing: any = [] ;
  dataArray = [];
  constructor(private userService:UserService) { }

  ngOnInit() {
    this.getUserDetails();
    
  }
  
  getUserDetails() {
    const resu = this.userService.getUsers().subscribe((users:any)=> 
    {
      this.postDataListing = users ;
     
      this.dataArray = this.postDataListing['data'];
   
    });
    return resu;
 
}
}
