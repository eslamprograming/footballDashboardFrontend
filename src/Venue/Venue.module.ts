import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VenueComponent } from './Venue.component';
import { MainVenueComponent } from './Compontes/MainVenue/MainVenue.component';
import { CreateVenueComponent } from './Compontes/CreateVenue/CreateVenue.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UpdateComponent } from './Compontes/Update/Update.component';

@NgModule({
  imports: [
    CommonModule,FormsModule,RouterModule
  ],
  declarations: [VenueComponent,MainVenueComponent,CreateVenueComponent,UpdateComponent],
  exports:[MainVenueComponent,CreateVenueComponent,UpdateComponent]
})
export class VenueModule { }
