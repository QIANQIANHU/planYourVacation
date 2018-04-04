import { Component, OnInit } from '@angular/core';
import { PlaceService } from '../place.service';
import { Place } from '../place.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [PlaceService]
})
export class AdminComponent implements OnInit {

  constructor(private placeService: PlaceService) { }

  ngOnInit() {
  }
  submitForm(ImageUrl: string, wikiUrl: string, name: string, description: string){
    var newPlace: Place = new Place(ImageUrl, wikiUrl, name, description);
    this.placeService.addPlace(newPlace);
  }
}
