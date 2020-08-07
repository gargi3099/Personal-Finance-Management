import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './auth/signin/signin.component';
import { FirstComponent } from './first/first.component';
import { AuthGuardService } from './auth-guard.service';
import { SignupComponent } from './auth/signup/signup.component';
import { SummaryComponent } from './summary/summary.component';
import { MemberDetailsComponent } from './member-details/member-details.component';


const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home', component: HomeComponent,canActivate:[AuthGuardService]},
  {path:'home/add-member',component:FirstComponent,canActivate:[AuthGuardService]},
  {path:'home/members',component: HomeComponent,canActivate:[AuthGuardService]},
  {path:'home/members/:id/:name',component: MemberDetailsComponent, canActivate:[AuthGuardService]},
  {path:'signin',component: SigninComponent},
  {path:'signup',component: SignupComponent},
  {path:'summary',component: SummaryComponent,canActivate:[AuthGuardService]},
  {path:'**',component: SigninComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
