import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LeagueService } from 'src/League/Services/League.service';
import { Response } from 'src/app/ModelView/Response';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-UpdateTeam',
  templateUrl: './UpdateTeam.component.html',
  styleUrls: ['./UpdateTeam.component.css']
})
export class UpdateTeamComponent implements OnInit {

  constructor(private service:LeagueService,private http:HttpClient,private router:Router) { }
  responseobj:Response=new Response()
  model2:any;

  ngOnInit() {
    try {
      const storedData = localStorage.getItem("team");

      if (storedData) {
        this.model2 = JSON.parse(storedData);
      } else {
        console.log('Key "player" not found in localStorage');
      }
    } catch (error) {
      console.error('Error retrieving object from localStorage:', error);
    }
    this.service.GetAll(1,'api/League/GetAllLeague?GroupCount=').subscribe(res=>{
      this.responseobj=res;
    },
    error=>{
      alert("error");
    }
    
    )
  }
  fileToUpload: File | null = null;
  onFileSelected(event: any) {
    this.fileToUpload = event.target.files[0];
  }

  onSubmit() {
    this.router.navigate(['/Spaner']);
    const objToSend = new FormData();
    objToSend.append('TeamName', this.model2.teamName);
    if (this.fileToUpload != null) {
      objToSend.append('TeamLogo', this.fileToUpload, this.fileToUpload.name);
    }
    objToSend.append('FoundedYear', this.model2.foundedYear);
    objToSend.append('HomeCity', this.model2.homeCity);
    objToSend.append('HomeStadium', this.model2.homeStadium);
    objToSend.append('CoachName', this.model2.coachName);
    objToSend.append('LeagueId', this.model2.leagueId);




    this.http.put<any>(`${environment.apiUrl}api/Team/UpdateTeam?TeamId=${this.model2.teamID}`, objToSend)
      .subscribe(res => {
      this.router.navigate(['/Team']);
        console.log(res);
      },
      error=>{
      this.router.navigate(['/CreateTeam']);
      console.log(error);
      alert("error");
      }
      );
  }
}
