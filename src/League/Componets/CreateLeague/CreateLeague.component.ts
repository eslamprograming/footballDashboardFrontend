
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Response } from 'src/app/ModelView/Response';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-CreateLeague',
  templateUrl: './CreateLeague.component.html',
  styleUrls: ['./CreateLeague.component.css']
})
export class CreateLeagueComponent implements OnInit {

  responseobj:Response=new Response();
  constructor(private router:Router,private http:HttpClient) { }
  ngOnInit() {
    };
  fileToUpload: File | null = null;
  onFileSelected(event: any) {
    this.fileToUpload = event.target.files[0];
  }

  onSubmit(formData: any) {
    this.router.navigate(['/Spaner']);
    const objToSend = new FormData();
    objToSend.append('LeagueName', formData.LeagueName);
    if (this.fileToUpload != null) {
      objToSend.append('LeagueLogo', this.fileToUpload, this.fileToUpload.name);
    }
    objToSend.append('Season', formData.Season);
    objToSend.append('StartDate', formData.StartDate);
    objToSend.append('EndDate', formData.EndDate);

    this.http.post<any>(`${environment.apiUrl}api/League/AddNewLeague`, objToSend)
      .subscribe(res =>{ 
        this.responseobj=res;
        if(this.responseobj.success===true){
        this.router.navigate(['/League']);
      }
        else{
          alert(this.responseobj.message);
        }
      },
      error=>{
        alert("error : "+error.Message);
        this.router.navigate(['/CreateLeague']);
      }
      
      );
  }
 
  
}
