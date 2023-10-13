import { Component, OnInit } from '@angular/core';
import { LeagueService } from 'src/League/Services/League.service';
import { Response } from 'src/app/ModelView/Response';

@Component({
  selector: 'app-MainStandings',
  templateUrl: './MainStandings.component.html',
  styleUrls: ['./MainStandings.component.css']
})
export class MainStandingsComponent implements OnInit {

  constructor(private service:LeagueService) { }
  responseobj:Response=new Response();

  ngOnInit() {
    this.League();
  }
  league2:number=0;
  League(){
    this.service.GetAll(1,'api/League/GetAllLeague?GroupCount=').subscribe(res=>{
      this.responseobj=res;
      
    },error=>{
      alert("error");
    })
  }
  responseStranding:Response=new Response();
  Stranding(){
    this.service.GetAll(this.league2,'api/Standings/GetAllStandings?GroupCount=').subscribe(res=>{
      console.log(res);
      this.responseStranding=res;
    },error=>{
      alert("error");
    })
  }

}
