import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { RegistrationComponent } from './registration/registration.component';
import { MemberCardComponent } from './member-card/member-card.component';
import { MemberChildComponent } from './member-card/member-child/member-child.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFireAuthModule } from '@angular/fire/auth';
import 'firebase/firestore';
import { auth } from 'firebase/app';
import { NavbarComponent } from './shared-components/navbar/navbar.component';
import { SigninComponent } from './auth/signin/signin.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SummaryComponent } from './summary/summary.component';
import { MemberDetailsComponent } from './member-details/member-details.component';
import { AuthComponent } from './auth/auth.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestPipe } from './test.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    RegistrationComponent,
    MemberCardComponent,
    MemberChildComponent,
    NavbarComponent,
    SigninComponent,
    HomeComponent,
    SignupComponent,
    SummaryComponent,
    MemberDetailsComponent,
    AuthComponent,
    TestPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAnalyticsModule,
    AngularFireAuthModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
