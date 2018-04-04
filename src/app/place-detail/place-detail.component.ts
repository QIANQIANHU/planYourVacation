import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Place } from '../place.model';
import { PlaceService } from '../place.service';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.component.html',
  styleUrls: ['./place-detail.component.css'],
  providers: [PlaceService]
})

export class PlaceDetailComponent implements OnInit {
   placeId: string;
   placeToDisplay;

  constructor(private route: ActivatedRoute, private location: Location, private placeService: PlaceService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.placeId = urlParameters['id'];
    });
    this.placeToDisplay = this.placeService.getPlaceById(this.placeId);
  }

}
