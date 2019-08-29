import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';
import { SignupComponent } from "./signup/signup.component";
import { HomePageComponent } from "./home-page/home-page.component";

const routes: Routes = [
  { path: 'login',  component: UserLoginComponent},
  { path: 'signup',  component: SignupComponent},
  { path: 'home',  component: HomePageComponent},
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
