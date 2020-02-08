import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import  { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';  
import { BackendService } from './backend.service';

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    /*...*/
    InMemoryWebApiModule.forRoot(BackendService),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
