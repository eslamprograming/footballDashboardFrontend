import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SheardModule } from "../Sheard/Sheard.module";
import { LayoutComponent } from './Layout/Layout.component';
import { RouterModule, Routes } from '@angular/router';
import { LeagueModule } from 'src/League/League.module';
import { TeamModule } from 'src/team/team.module';
import { PlayerModule } from 'src/Player/Player.module';
import { MatchModule } from 'src/Match/Match.module';
import { VenueModule } from 'src/Venue/Venue.module';
import { FormsModule } from '@angular/forms';
import { StrandingsModule } from 'src/strandings/strandings.module';


@NgModule({
    declarations: [		
        AppComponent,
      LayoutComponent,
      
   ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,FormsModule,RouterModule,
        SheardModule,RouterModule,LeagueModule,TeamModule,PlayerModule,MatchModule,VenueModule,StrandingsModule
    ]
})
export class AppModule { }
