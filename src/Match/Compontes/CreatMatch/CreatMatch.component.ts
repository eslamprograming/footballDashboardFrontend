import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LeagueService } from 'src/League/Services/League.service';
import { CreateMatch } from 'src/app/ModelView/CreateMatch';
import { Response } from 'src/app/ModelView/Response';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-CreatMatch',
  templateUrl: './CreatMatch.component.html',
  styleUrls: ['./CreatMatch.component.css']
})
export class CreatMatchComponent implements OnInit {

  model: CreateMatch = {} as CreateMatch;
  responseobj: Response = new Response();
  responseobj2: Response = new Response();

  selectedLeague: number = 0;
  selectedTeam: number = 0;
  selectedTeamAway: number = 0;
  venueId: number = 0;
  teams: any[] = [];

  constructor(private router: Router, private http: HttpClient, private service: LeagueService) { }

  ngOnInit() {
    this.fetchLeagueData();
    this.getAllVenue();
  }

  onSubmit() {
    this.router.navigate(['/Spaner']);
    this.model.AwayTeamID = this.selectedTeamAway;
    this.model.HomeTeamID = this.selectedTeam;
    this.model.LeagueID = this.selectedLeague;
    this.model.VenueId = this.venueId;
    this.service.postData(this.model, 'api/Match/AddNewMatch').subscribe(
      (res) => {
        console.log("Match added successfully:", res);
        this.router.navigate(['/Match']);
      },
      (error) => {
        this.router.navigate(['/CreateMatch']);
        console.error("Error adding match:", error);
        alert("error");
      }
    );
  }

  fetchLeagueData() {
    this.service.GetAll(1, 'api/League/GetAllLeague?GroupCount=').subscribe(
      (res: Response) => {
        this.responseobj = res;
        this.selectedLeague = this.responseobj.Value?.leagueID || 0;
        this.fetchTeams();
      },
      (error) => {
        console.error("Error fetching league data:", error);
      }
    );
  }

  fetchTeams() {
    this.http.get<any>(`${environment.apiUrl}api/Team/GetAllTeamInLeague?league=${this.selectedLeague}`).subscribe(
      (response) => {
        this.teams = response.values;
      },
      (error) => {
        console.error("Error fetching teams:", error);
      }
    );
  }

  Team() {
    this.fetchTeams();
  }

  getAllVenue() {
    this.service.GetAll(1, 'api/Venue/GetAllVenue?GroupCount=').subscribe(res => {
      this.responseobj2 = res;
    }, (error) => {
      console.error("Error fetching venues:", error);
      // Provide user feedback about the error
    });
  }
}
