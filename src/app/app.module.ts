import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SpinnerInterceptor } from './interceptors/spinner/spinner.interceptor';
import { ConversationComponent } from './components/conversation/conversation.component';
import { HeadnavComponent } from './components/headnav/headnav.component';
import { Ng2PageScrollModule } from 'ng2-page-scroll';
import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FacialComponent } from './components/facial/facial.component';
import { WebcamModule } from 'ngx-webcam';
import { AngularEmojisModule } from 'angular-emojis';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    SpinnerComponent,
    DashboardComponent,
    ConversationComponent,
    HeadnavComponent,
    FacialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Ng2PageScrollModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    RouterModule,
    NgbModule,
    MatDialogModule,
    BrowserAnimationsModule,
    WebcamModule,
    AngularEmojisModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SpinnerInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
