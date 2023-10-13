import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LeagueService } from 'src/League/Services/League.service';
import { Response } from 'src/app/ModelView/Response';
import { Location } from '@angular/common';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  responseobj:Response=new Response();

  constructor(private service:LeagueService,private location:Location,private router:Router) { }

  ngOnInit() {
    this.getAll();
  }
  getAll(){
    this.service.GetAll(1,'api/League/GetAllLeague?GroupCount=').subscribe(reponse=>{
    this.router.navigate(['/Spaner']);
    this.responseobj=reponse; 

      if(this.responseobj.success===true){
        this.router.navigate(['/League']);
      }
      else{
        alert(this.responseobj.message);
      }
      console.log(reponse);

    },
    error=>{
      alert("error this error is "+error.Message);
    }
    )
  }
  Details(Id:Number,endPoints:any){
    alert(Id);
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
    localStorage.setItem("League",JSON.stringify(item));
    this.router.navigate(['/UpdateLeague']);
  }
  deleteResponse :Response=new Response();
  Delete(Id:any,endPoint:any){
    var result=confirm("Do You Want to Delete This League");
    if(result){
    this.service.DeletData(Id,endPoint).subscribe(
      res=>{
          window.location.reload();
      },
      error=>{
        alert(error.Message);
      }
    )
  }}
}
