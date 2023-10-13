import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LeagueService } from 'src/League/Services/League.service';
import { Response } from 'src/app/ModelView/Response';
import { VenueVM } from 'src/app/ModelView/VenueVM';

@Component({
  selector: 'app-CreateVenue',
  templateUrl: './CreateVenue.component.html',
  styleUrls: ['./CreateVenue.component.css']
})
export class CreateVenueComponent implements OnInit {
  model: VenueVM = new VenueVM();
  responseobj: Response = new Response();

  constructor(private service: LeagueService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.router.navigate(['/Spaner']);
    this.service.postData(this.model,'api/Venue/AddNewVenue').subscribe(
      res => {
        this.responseobj = res;
        if (this.responseobj.success === true) {
          this.router.navigate(['/Venue']);
        } else {
          this.router.navigate(['/CreateVenue']);
        }
      },
      error => {
        this.router.navigate(['/CreateVenue']);
        console.error("Error occurred:", error);
      }
    );
  }
}
