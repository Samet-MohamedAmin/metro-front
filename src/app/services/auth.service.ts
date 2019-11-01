import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _id: string = environment.DEFAULT_USER;

  constructor() { }

  set id(value: string) {
    this._id = value;
  }

  get id(): string {
    return this._id;
  }
}
