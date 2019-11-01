import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _id: string = environment.DEFAULT_USER;

  constructor(private router: Router) { }

  set id(value: string) {
    this._id = value;
  }

  get id(): string {
    return this._id;
  }

  updateUserId(userId: string) {
    // this.auth.id = this.userId;
    console.log('update userId ' + userId)
    this.router.navigate(['/send', userId])
  }
}
