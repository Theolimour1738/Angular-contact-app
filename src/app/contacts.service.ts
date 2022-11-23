import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  SERVER_URL: string = "http://localhost:8000/contacts";
  AgifyUrl: string = "https://api.agify.io/";
  constructor(private httpClient: HttpClient) { }
  


public createContact(contactForm: any){
  return this.httpClient.post(`${this.SERVER_URL + 'contacts'}`, contactForm)
}



postContact(data:any){
  return this.httpClient.post(this.SERVER_URL, data)
}

getAge(name: string){
  return this.httpClient.get(this.AgifyUrl + `?name=${name}`) 
  .pipe(map((response:any) =>{
   return response;
  })) 
}

getContacts ()
{
return this.httpClient.get<any>(this.SERVER_URL)
.pipe(map((res:any)=> {
  return res;
}))
}}
