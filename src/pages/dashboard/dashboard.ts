import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import {SensorService} from '../../services/sensor-service';

import {RoundProgressConfig} from "angular-svg-round-progressbar/dist/round-progress.config";
import {LightingPage} from "../lighting/lighting";
import {WaterPage} from "../water/water";
import {AirPage} from "../air/air";

@Component({
  selector: 'dashboard',
  templateUrl: 'dashboard.html',
  providers:[SensorService]
})
export class Dashboard {

  public brightnessDuration:number = 10;
  public brightnessDurationGoal:number = 12;

  constructor(public nav: NavController, public sensorService: SensorService, public _config: RoundProgressConfig) {

    _config.setDefaults({
      color: '#84ad31',
      background: '#eaeaea',
    });


  }

  public onClickLighting() {
    this.nav.push(LightingPage);
  }

  public onClickWater() {
    this.nav.push(WaterPage);
  }

  public onClickAir(){
    this.nav.push(AirPage);
  }
}
