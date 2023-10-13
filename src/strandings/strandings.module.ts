import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StrandingsComponent } from './strandings.component';
import { MainStandingsComponent } from './Componets/MainStandings/MainStandings.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,FormsModule
  ],
  declarations: [StrandingsComponent,MainStandingsComponent],
  exports:[MainStandingsComponent]
})
export class StrandingsModule { }
