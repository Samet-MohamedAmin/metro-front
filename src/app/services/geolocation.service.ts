import { Injectable } from '@angular/core';
import { Coords } from '../models/coords';
import { CoordsService } from './coords.service';
import { AuthService } from './auth.service';

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
      userId: this.auth.id,
      lat: coordinates.latitude,
      lon: coordinates.longitude,
      acc: coordinates.accuracy,
      timestamp: position.timestamp
    }

    this.coordsService.save(coords).subscribe(theCoords => console.log(theCoords))
  }

  positionErrorCallback: PositionErrorCallback = (error: PositionError) => {

    console.log(error)
  }

  constructor(private coordsService: CoordsService, private auth: AuthService) {
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
      
    }, 5000);
  }

}
