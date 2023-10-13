import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LeagueService } from 'src/League/Services/League.service';
import { CreateMatch } from 'src/app/ModelView/CreateMatch';
import { Response } from 'src/app/ModelView/Response';
import { UpdateMatch } from 'src/app/ModelView/UpdateMatch';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-UpdateMatch',
  templateUrl: './UpdateMatch.component.html',
  styleUrls: ['./UpdateMatch.component.css']
})
export class UpdateMatchComponent implements OnInit {

  model:UpdateMatch=new UpdateMatch();
  responseobj:Response=new Response();
  responseobj2: Response = new Response();

  selectedLeague?: number = this.model.LeagueID;;
  selectedTeam?: number = this.model.HomeTeamID;
  selectedTeamAway?: number = this.model.AwayTeamID;
  venueId?: number = this.model.VenueId;
  teams: any[] = [];
  model2:any;

  constructor(private router: Router, private http: HttpClient, private service: LeagueService) { }

  ngOnInit() {
    try {
      const storedData = localStorage.getItem("Match");

      if (storedData) {
        this.model2 = JSON.parse(storedData);
        this.model.AwayTeamID=this.model2.awayTeamID;
        this.model.HomeTeamID=this.model2.homeTeamID;
        this.model.RefereeName=this.model2.refereeName;
        this.model.Location=this.model2.location;
        this.model.VenueId=this.model2.venueId;
        this.model.MatchDate=this.model2.matchDate;
        this.model.LeagueID=this.model2.leagueID;
      } else {
        console.log('Key "Venue" not found in localStorage');
      }
    } catch (error) {
      console.error('Error retrieving object from localStorage:', error);
    }
    this.fetchLeagueData();
    this.getAllVenue();
  }

  onSubmit() {
    this.router.navigate(['/Spaner']);
    this.service.putData(this.model,this.model2.matchID,'api/Match/UpdateMatch?MatchId=').subscribe(
      (res) => {
        console.log("Match added successfully:", res);
        this.router.navigate(['/Match']);
      },
      (error) => {
        this.router.navigate(['/UpdateMatch']);
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
    this.http.get<any>(`${environment.apiUrl}api/Team/GetAllTeamInLeague?league=${this.model.LeagueID}`).subscribe(
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
