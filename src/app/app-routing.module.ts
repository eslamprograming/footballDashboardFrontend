import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/Sheard/Compontes/Home/Home.component';
import { LayoutComponent } from './Layout/Layout.component';
import { RegisterComponent } from 'src/Auth/Compontes/Register/Register.component';
import { LoginComponent } from 'src/Auth/Compontes/Login/Login.component';
import { ProfileComponent } from 'src/Auth/Compontes/Profile/Profile.component';
import { MainComponent } from 'src/League/Componets/main/main.component';
import { MainMatchComponent } from 'src/Match/Compontes/MainMatch/MainMatch.component';
import { MainTeamComponent } from 'src/team/Compontes/MainTeam/MainTeam.component';
import { MainPlayerComponent } from 'src/Player/Conpontes/MainPlayer/MainPlayer.component';
import { MainStandingsComponent } from 'src/strandings/Componets/MainStandings/MainStandings.component';
import { MainVenueComponent } from 'src/Venue/Compontes/MainVenue/MainVenue.component';
import { CreateLeagueComponent } from 'src/League/Componets/CreateLeague/CreateLeague.component';
import { CreateTeamComponent } from 'src/team/Compontes/CreateTeam/CreateTeam.component';
import { CreatePlayerComponent } from 'src/Player/Conpontes/CreatePlayer/CreatePlayer.component';
import { CreatMatchComponent } from 'src/Match/Compontes/CreatMatch/CreatMatch.component';
import { CreateVenueComponent } from 'src/Venue/Compontes/CreateVenue/CreateVenue.component';
import { SpanerComponent } from 'src/Sheard/Compontes/spaner/spaner.component';
import { UpdateComponent } from 'src/Venue/Compontes/Update/Update.component';
import { LeagueUpdateComponent } from 'src/League/Componets/LeagueUpdate/LeagueUpdate.component';
import { UpdatePlayerComponent } from 'src/Player/Conpontes/updatePlayer/updatePlayer.component';
import { UpdateTeamComponent } from 'src/team/Compontes/UpdateTeam/UpdateTeam.component';
import { UpdateMatchComponent } from 'src/Match/Compontes/UpdateMatch/UpdateMatch.component';


const routes: Routes = [
  {path:'',component: LayoutComponent,children:[
    {path:'',component:HomeComponent},
    {path:'League',component:MainComponent},
    {path:'Match',component:MainMatchComponent},
    {path:'Team',component:MainTeamComponent},
    {path:'Player',component:MainPlayerComponent},
    {path:'Standings',component:MainStandingsComponent},
    {path:'Venue',component:MainVenueComponent},
    {path:'CreateTeam',component:CreateTeamComponent},
    {path:'CreateLeague',component:CreateLeagueComponent},
    {path:'CreatePlayer',component:CreatePlayerComponent},
    {path:'CreateMatch',component:CreatMatchComponent},
    {path:'CreateVenue',component:CreateVenueComponent},
    {path:'Spaner',component:SpanerComponent},
    {path:'UpdateVenue',component:UpdateComponent},
    {path:'UpdateLeague',component:LeagueUpdateComponent},
    {path:'UpdatePlayer',component:UpdatePlayerComponent},
    {path:'UpdateTeam',component:UpdateTeamComponent},
    {path:'UpdateMatch',component:UpdateMatchComponent},
    
  ],},
  {path:'Register',component:RegisterComponent},
  {path:'Login',component:LoginComponent},
  {path:'Profile',component:ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
