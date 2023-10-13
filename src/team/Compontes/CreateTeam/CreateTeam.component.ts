import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LeagueService } from 'src/League/Services/League.service';
import { Response } from 'src/app/ModelView/Response';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-CreateTeam',
  templateUrl: './CreateTeam.component.html',
  styleUrls: ['./CreateTeam.component.css']
})
export class CreateTeamComponent implements OnInit {

  constructor(private service:LeagueService,private http:HttpClient,private router:Router) { }
  responseobj:Response=new Response();

  ngOnInit() {
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

  onSubmit(formData: any) {
    this.router.navigate(['/Spaner']);
    const objToSend = new FormData();
    objToSend.append('TeamName', formData.TeamName);
    if (this.fileToUpload != null) {
      objToSend.append('TeamLogo', this.fileToUpload, this.fileToUpload.name);
    }
    objToSend.append('FoundedYear', formData.FoundedYear);
    objToSend.append('HomeCity', formData.HomeCity);
    objToSend.append('HomeStadium', formData.HomeStadium);
    objToSend.append('CoachName', formData.CoachName);
    objToSend.append('LeagueId', formData.LeagueId);


    this.http.post<any>(`${environment.apiUrl}api/Team/AddNewTeam`, objToSend)
      .subscribe(res => {
      this.router.navigate(['/CreateTeam']);
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
