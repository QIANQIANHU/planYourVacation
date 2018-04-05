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

  updatePlace(localUpdatedPlace)
  {
    var placeEntryInFirebase = this.getPlaceById(localUpdatedPlace.$key);
    placeEntryInFirebase.update({imageUrl: localUpdatedPlace.imageUrl,
                                wikiUrl: localUpdatedPlace.wikiUrl,
                                name: localUpdatedPlace.name,
                                description: localUpdatedPlace.description});
  }

  deletePlace(localPlaceToDelete){
  var placeEntryInFirebase = this.getPlaceById(localPlaceToDelete.$key);
  placeEntryInFirebase.remove();
}
}
