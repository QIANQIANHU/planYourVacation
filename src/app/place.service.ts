import { Injectable } from '@angular/core';
import { Place } from './place.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class PlaceService {
   places: FirebaseListObservable<any[]>;
  constructor(private database: AngularFireDatabase) {
    this.places = database.list('places');
   }

  getPlaces() {
    return this.places;
  }

  addPlace(newPlace: Place) {
    this.places.push(newPlace);
  }
  getPlaceById(placeId: string){
    return this.database.object('places/' + placeId);
    // for (var i = 0; i <= ALBUMS.length - 1; i++) {
    //   if (ALBUMS[i].id === albumId) {
    //     return ALBUMS[i];
    //   }
    // }
  }
}
