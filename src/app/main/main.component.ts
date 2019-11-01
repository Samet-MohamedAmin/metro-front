import { Component, OnInit } from '@angular/core';
import { GeolocationService } from '../services/geolocation.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {

  constructor(private geolocation: GeolocationService,
              private route: ActivatedRoute,
              private auth: AuthService) { }

  ngOnInit() {
    this.auth.id = this.route.snapshot.params.id;
    this.geolocation.updatePosition();
  }

}
