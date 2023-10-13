import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './Auth.component';
import { RegisterComponent } from './Compontes/Register/Register.component';
import { LoginComponent } from './Compontes/Login/Login.component';
import { ProfileComponent } from './Compontes/Profile/Profile.component';
import { HomeComponent } from 'src/Sheard/Compontes/Home/Home.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,FormsModule,RouterModule
  ],
  declarations: [RegisterComponent,LoginComponent,ProfileComponent],
  exports:[RegisterComponent,LoginComponent,ProfileComponent]
})
export class AuthModule { }
