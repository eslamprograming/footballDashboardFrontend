// Update.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LeagueService } from 'src/League/Services/League.service';
import { UpdateVenue } from 'src/app/ModelView/UpdateVenue';
import { VenueVM } from 'src/app/ModelView/VenueVM';

@Component({
  selector: 'app-Update',
  templateUrl: './Update.component.html',
  styleUrls: ['./Update.component.css']
})
export class UpdateComponent implements OnInit {
  model: UpdateVenue = new UpdateVenue(); // Assuming UpdateVenue is your model
  model2: VenueVM = new VenueVM(); // Assuming VenueVM is your model

  constructor(private service: LeagueService, private router: Router) { }

  ngOnInit() {
    try {
      const storedData = localStorage.getItem("Venue");

      if (storedData) {
        this.model = JSON.parse(storedData);
      } else {
        console.log('Key "Venue" not found in localStorage');
      }
    } catch (error) {
      console.error('Error retrieving object from localStorage:', error);
    }
  }

  ngSubmit() {
    this.router.navigate(['Spaner']);
    this.model2.capacity = this.model.capacity;
    this.model2.contactInfo = this.model.contactInfo;
    this.model2.location = this.model.location;
    this.model2.venueName = this.model.venueName;
    var Id=Number(this.model.venueID);
    this.service.putData(this.model2,Id,'api/Venue/UpdateVenue?VenueId=')
      .subscribe(res => {
        this.router.navigate(['/Venue']);
      }, error => {
        alert("error");
        this.router.navigate(['/CreateVenue']);
      });
  }
}
