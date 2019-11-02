import { Component, OnInit } from '@angular/core';
import { GeolocationService } from '../services/geolocation.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CoordsService } from '../services/coords.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {


  constructor(private geolocation: GeolocationService,
              private route: ActivatedRoute,
              private coordsService: CoordsService,
              private auth: AuthService) { }

  ngOnInit() {
    this.auth.id = this.route.snapshot.params.id;
    this.route.params.subscribe(params => {
      this.auth.id = params.id;
      this.coordsService.updateDataCount();
    })
    this.geolocation.updatePosition();
  }

  updateUserId(userId: string) {
    this.auth.updateUserId(userId)
  }

  getDataCount():number {
    return this.coordsService.dataCount
  }


  getUserId():string {
    return this.auth.id
  }

  getLastAcc(): number {
    return this.geolocation.lastAcc;
  }
}
