import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LeagueService } from 'src/League/Services/League.service';
import { Response } from 'src/app/ModelView/Response';

@Component({
  selector: 'app-MainMatch',
  templateUrl: './MainMatch.component.html',
  styleUrls: ['./MainMatch.component.css']
})
export class MainMatchComponent implements OnInit {
Delete(matchID: any) {
  this.service.DeletData(matchID,'api/Match/DeleteMatch?MatchId=').subscribe(res=>{
    window.location.reload();
  },
  error=>{
    alert("Faild To Delete");
  }
  )
}
Edit(item: any) {
  localStorage.setItem("Match",JSON.stringify(item));
  this.router.navigate(['/UpdateMatch']);
}
Details(item: any) {
throw new Error('Method not implemented.');
}
response:Response=new Response();
  constructor(private service:LeagueService,private router:Router) { }

  ngOnInit() {
    this.getAll();
  }
  getAll(){
    this.service.GetAll(1,'api/Match/GetAllMatch?GroupCount=').subscribe(res=>{
      this.response=res;
      console.log(this.response);
    },
    error=>{
      alert("error");
    }
    )
  }
}
