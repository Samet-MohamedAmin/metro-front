import { Injectable } from '@angular/core';
import { Coords } from '../models/coords';
import { CoordsService } from './coords.service';
import { timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  options : PositionOptions = {
    enableHighAccuracy: true,
    timeout: 15000,
    maximumAge: 0
  };

  geolocation: Geolocation;

  positionCallback: PositionCallback = (position: Position) => {

    console.log(position);

    const coordinates: Coordinates = position.coords;

    const coords: Coords = {
      lat: coordinates.latitude,
      lon: coordinates.longitude,
      acc: coordinates.accuracy
    }

    console.log('coords: ')
    console.log(coords)
    this.coordsService.save(coords).subscribe(theCoords => console.log(theCoords))
    this.coordsService.getAll().subscribe(theCoords => console.log(theCoords))
  }

  positionErrorCallback: PositionErrorCallback = (error: PositionError) => {

    console.log(error)
  }

  constructor(private coordsService: CoordsService) {
    this.refreshLocaition()
  }

  refreshLocaition() {

    this.geolocation = navigator.geolocation
  }
  updatePosition() {
    
    setInterval(() => {

      this.geolocation.getCurrentPosition(
        this.positionCallback,
        this.positionErrorCallback,
        this.options)
      
      console.log('coordsService.getAll():')
      this.coordsService.getAll().subscribe(coordsList => {console.log(coordsList)});
    }, 5000);
  }

}
