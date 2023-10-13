import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LeagueService } from 'src/League/Services/League.service';
import { Response } from 'src/app/ModelView/Response';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-MainPlayer',
  templateUrl: './MainPlayer.component.html',
  styleUrls: ['./MainPlayer.component.css']
})
export class MainPlayerComponent implements OnInit {
  responseobj: Response=new Response();
  fileToUpload: File | null = null;
  teams: any[] = [];

  selectedLeague: number = 0;
  selectedTeam: number = 0;
  constructor(private router: Router, private http: HttpClient, private service: LeagueService) { }

  ngOnInit() {
     this.fetchLeagueData();
    this.AllPlayer();
  }

  fetchLeagueData() {
    this.service.GetAll(1,'api/League/GetAllLeague?GroupCount=').subscribe(
      (res: Response) => {
        console.log('League data received:', res);
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
        console.log("Teams in the selected league:", this.teams);
      },
      (error) => {
        console.error("Error fetching teams:", error);
      }
    );
  }
  Team() {
    this.fetchTeams();
  }
  response2:Response=new Response();
  AllPlayer(){
    this.http.get<any>(`${environment.apiUrl}api/Player/GetAllPlayer?GroupCount=1`).subscribe(res=>{
      this.response2=res;
      console.log(this.response2);
      
    },
      error=>{
        alert("error");
      }
    )
  }
  Details(Id:Number,endPoints:any){
    this.service.GetLeague(Id,endPoints).subscribe(
      res=>{
        alert("succes");
      },
      error=>{
        alert("error");
        console.log(error.message);
      }
    )
  }
  Edit(item:any){
    localStorage.setItem("player",JSON.stringify(item));
    this.router.navigate(['/UpdatePlayer']);
  }
  Delete(Id:any,endPoints:any){
    var result=confirm("Do You Want To Delete");
    if(result){
      this.service.DeletData(Id,endPoints).subscribe(
        res=>{
          window.location.reload();
        },
        error=>{
          alert("error");
        }
      )
    }
  }

}
