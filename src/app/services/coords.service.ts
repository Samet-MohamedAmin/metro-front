import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Coords } from '../models/coords';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CoordsService {

  private _dataCount: number;
  private url = environment.BACKEND + '/coords';


  constructor(private http: HttpClient, private auth: AuthService) { }

  public get dataCount():number {
    return this._dataCount;
  }

  getAll(){
    return this.http.get(this.url)
  }

  getByUserId(userId: string) {
    return this.http.get(this.url + '/' + userId)
  }

  save(coords: Coords) {
    this.updateDataCount()
    return this.http.post(this.url, coords)
  }

  getDataCount(userId: string) {
    return this.http.get<{'count': number}>(this.url + '/' + userId + '/count')
  }

  
  updateDataCount(){
    this.getDataCount(this.auth.id)
        .subscribe(result => {this._dataCount = result.count; console.log('update dataCount - main comp')})
  }
}
