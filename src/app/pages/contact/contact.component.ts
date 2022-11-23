import { Component, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ContactsService } from 'src/app/contacts.service';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

contacts: any;
Age: any = 10;
/* personAge: any = this.contactsService.getAge(this.selectedContact.firstName)
.subscribe((Myage: any)=>{
  console.log(Myage.age)
  Myage.age = this.personAge;
 // this.personAge = age.age;
});; */

searchContact = '';
 
  selectedContact?: any;
  
  constructor( public dialog:MatDialog, private contactsService: ContactsService) { }
  
  openDialog(){
    this.dialog.open(FormComponent)
  }


  ngOnInit() {
    this.LoadContacts();
    //this.getAge(this.selectedContact.firstName);

    
  }
  
  

  getAge( name : string){
    if(this.selectedContact != null ){
  this.contactsService.getAge(this.selectedContact.firstName = name)
      .subscribe((Myage: any)=>{
        console.log(Myage.count)
        this.Age = Myage.Age;
       // this.personAge = age.age;
      });
  }

  }

 public  LoadContacts (){
    this.contactsService.getContacts().subscribe(response=>{
      this.contacts = response;
    })
  }

  onSelect(contact: any): void {
    this.selectedContact = contact;
    this.getAge(this.selectedContact.firstName);
  }
}
