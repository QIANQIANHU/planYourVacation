import { Component, OnInit } from '@angular/core';
import { Place } from '../place.model';
import { Router } from '@angular/router';
import { PlaceService } from '../place.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-vacationplace',
  templateUrl: './vacationplace.component.html',
  styleUrls: ['./vacationplace.component.css'],
  providers: [PlaceService]


})
export class VacationplaceComponent implements OnInit{
   places: FirebaseListObservable<any[]>;
   currentRoute: string = this.router.url;
   


constructor(private router: Router, private placeService: PlaceService) {}
  // places: Place[] = [
  //   new Place("img", "wiki", "Rome", "When you visit the Eternal City, prepare to cross a few must-see attractions – the Colosseum, the Trevi Fountain and the Pantheon, to name a few – off your bucket list. Additional treasures like St. Peter's Basilica and the Sistine Chapel can be found in nearby Vatican City.")
  // ]
  ngOnInit() {
    this.places = this.placeService.getPlaces();

  }

  goToDetailPage(clickedPlace) {
   this.router.navigate(['places', clickedPlace.$key]);
 };





 }
