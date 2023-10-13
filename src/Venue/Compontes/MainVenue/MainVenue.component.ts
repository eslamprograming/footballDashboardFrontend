import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LeagueService } from 'src/League/Services/League.service';
import { Response } from 'src/app/ModelView/Response';

@Component({
  selector: 'app-MainVenue',
  templateUrl: './MainVenue.component.html',
  styleUrls: ['./MainVenue.component.css']
})
export class MainVenueComponent implements OnInit {

  constructor(private service:LeagueService,private router:Router) { }

  ngOnInit() {
    this.AllVenue();
  }
  response:Response=new Response();
  AllVenue(){
    
    this.service.GetAll(1,'api/Venue/GetAllVenue?GroupCount=').subscribe(res=>{
      this.response=res;
      console.log(res);
    },
    error=>{
      alert("error");
    }
    )
  }
  Delete(Id:any,endpoint:any){
    this.router.navigate(['/Spaner']);
    this.service.DeletData(Id,endpoint).subscribe(res=>{
      this.router.navigate(['/Venue']);
    },
    error=>{
    this.router.navigate(['/Venue']);
      alert("error");
    })
  }
  Edit(item:any){
    localStorage.setItem("Venue",JSON.stringify(item));
    this.router.navigate(['/UpdateVenue']);

  }

}
