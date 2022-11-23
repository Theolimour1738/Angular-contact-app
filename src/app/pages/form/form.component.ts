import { Component, OnInit ,} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ContactsService } from 'src/app/contacts.service';
import { ContactModel } from './form.model';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})


export class FormComponent  implements OnInit {

  selectedContact?: any;
  contacts: any;
  contactObj : ContactModel = new ContactModel;
  contactForm!: FormGroup
  constructor( private fb: FormBuilder, public dialog:MatDialog, private api: ContactsService) { }

  ngOnInit(): void {

     this.contactForm = this.fb.group({
      firstName :[ '', [ Validators.maxLength(50), Validators.required]],
      lastName : ['',[ Validators.maxLength(50), Validators.required]], 
      email : ['',[ Validators.email, Validators.required]],
      address: ['', [ Validators.maxLength(255), Validators.required]],
      cellNumber: ['',[ Validators.maxLength(10), Validators.required, Validators.pattern("^((\\+27-?)|0)?[0-9]{10}$")]],
      bio:['',[ Validators.maxLength(255), Validators.required]]
    }) 

   // this.reloadPage();
  }
  closeDialog(){
    this.dialog.closeAll();
    this.reloadPage();
  }
  openDialog(){
    this.dialog.open(FormComponent)
  }
   /* onSubmit(){
   this.api.postContact(this.contactForm.value)
   .subscribe(response => {
    alert("saved successfully");
    console.log(response)
   });
  }  */

   onSubmit(){this.contactObj.firstName = this.contactForm.value.firstName;
    this.contactObj.lastName = this.contactForm.value.lastName;
    this.contactObj.email = this.contactForm.value.email;
    this.contactObj.address = this.contactForm.value.address;
    this.contactObj.cellNumber = this.contactForm.value.cellNumber;
    this.contactObj.bio = this.contactForm.value.bio;
    if(this.contactForm.valid){
      this.api.postContact(this.contactObj)
    .subscribe(res =>{
      console.log(res);
      this.closeDialog();
      alert("Save successfully");
      
    })
    }
  else {
    console.log("form is invalid")
  }
  }

  public  LoadContacts (){
    this.api.getContacts().subscribe(response=>{
      this.contacts = response;
    })
  }

  reloadPage(){
    window.location.reload();
  }

  onSelect(contact: any): void {
    this.selectedContact = contact;
  }
  
}


