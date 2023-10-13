import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreateLeagueVM } from 'src/app/ModelView/CreateLeagueVM';
import { Response } from 'src/app/ModelView/Response';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-LeagueUpdate',
  templateUrl: './LeagueUpdate.component.html',
  styleUrls: ['./LeagueUpdate.component.css']
})
export class LeagueUpdateComponent implements OnInit {

  responseobj: Response = new Response();
  model: CreateLeagueVM = new CreateLeagueVM();
  model2: any;
  fileToUpload: File | null = null;

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
    try {
      const storedData = localStorage.getItem("League");

      if (storedData) {
        this.model2 = JSON.parse(storedData);
        this.model.LeagueName = this.model2.leagueName;
        this.model.Season = this.model2.season;
        this.model.StartDate = this.model2.startDate;
        this.model.EndDate = this.model2.endDate;
      } else {
        console.log('Key "Venue" not found in localStorage');
      }
    } catch (error) {
      console.error('Error retrieving object from localStorage:', error);
    }
  }

  onFileSelected(event: any) {
    this.fileToUpload = event.target.files[0];
  }

   onSubmit(formData: any) {
    
      const objToSend = new FormData();
      objToSend.append('LeagueName', formData.LeagueName);
      
      if (this.fileToUpload) {
        objToSend.append('LeagueLogo', this.fileToUpload, this.fileToUpload.name);
      }

      objToSend.append('Season', formData.Season);
      objToSend.append('StartDate', formData.StartDate);
      objToSend.append('EndDate', formData.EndDate);

      const leagueId = parseInt(this.model2.leagueID);

       this.http.put<any>(`${environment.apiUrl}api/League/UpdateLeague?LeagueId=${leagueId}`, objToSend)
       .subscribe(response=>{
        if (response.success===true) {
          this.router.navigate(['/League']);
        } else {
          console.error(response.message);
          // Display the error in the UI or handle it accordingly
        }
       },
       error=>{alert("error");})
      }
}