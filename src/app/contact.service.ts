import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  API_URL = '/api/';
  constructor(private http: HttpClient) { }
  getContacts() {

   return this.http.get(this.API_URL + 'contacts');
  }
  getContact(contactId) {
   return this.http.get(`${this.API_URL + 'contacts'}/${contactId}`);
  }
}