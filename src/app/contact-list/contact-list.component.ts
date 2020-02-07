import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  contactName: string;
  contactPhone: string;
  age: number;
  constructor() { }

  ngOnInit(): void {
    this.contactName = 'David Yen';
    this.contactPhone = '626-333-2222';
    this.age = 23;
  }

}
