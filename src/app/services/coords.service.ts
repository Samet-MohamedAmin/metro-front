import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Coords } from '../models/coords';

@Injectable({
  providedIn: 'root'
})
export class CoordsService {

  private url = environment.BACKEND + '/coords';


  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get(this.url)
  }

  save(coords: Coords) {
    console.log('save coords')
    return this.http.post(this.url, coords)
  }

}
