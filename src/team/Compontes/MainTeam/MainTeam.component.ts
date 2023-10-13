// MainTeam.component.ts

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LeagueService } from 'src/League/Services/League.service';
import { Response } from 'src/app/ModelView/Response';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-MainTeam',
  templateUrl: './MainTeam.component.html',
  styleUrls: ['./MainTeam.component.css']
})
export class MainTeamComponent implements OnInit {
  responseobj: Response = new Response();
  teams: any[] = []; // Assuming you have a Team model, replace 'any[]' with the actual type of your teams.
  selectedLeague: number = 0;
  

  constructor(private http: HttpClient, private service: LeagueService,private router:Router) { }

  ngOnInit() {
    this.service.GetAll(1,'api/League/GetAllLeague?GroupCount=').subscribe(
      (res) => {
        this.responseobj = res;
      },
      (error) => {
        console.error("Error fetching data:", error);
        // You may want to provide a user-friendly error message in the UI.
      }
    );
  }
  leagueTeam() {
    // Now you can use this.selectedLeague as a number.
    this.http.get<any>(`${environment.apiUrl}api/Team/GetAllTeamInLeague?league=${this.selectedLeague}`).subscribe(
      (response) => {
        this.teams = response.values; // Assuming the response is an array of teams.
        console.log("Teams in the selected league:", this.teams);
        
      },
      (error) => {
        console.error("Error fetching teams:", error);
        // You may want to provide a user-friendly error message in the UI.
      }
    );
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
  Edit(team:any){
    localStorage.setItem("team",JSON.stringify(team));
    this.router.navigate(['/UpdateTeam']);
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
