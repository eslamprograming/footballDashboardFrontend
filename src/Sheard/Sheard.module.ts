import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SheardComponent } from './Sheard.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './Compontes/Footer/Footer.component';
import { SidebarComponent } from './Compontes/Sidebar/Sidebar.component';
import { HeaderComponent } from './Compontes/Header/Header.component';
import { HomeComponent } from './Compontes/Home/Home.component';
import { SpanerComponent } from './Compontes/spaner/spaner.component';

@NgModule({
  imports: [
    CommonModule,FormsModule
  ],
  declarations: [SheardComponent,FooterComponent,SidebarComponent,HeaderComponent,HomeComponent,SpanerComponent],
  exports:[FooterComponent,SidebarComponent,HeaderComponent,HomeComponent,SpanerComponent]
})
export class SheardModule { }
