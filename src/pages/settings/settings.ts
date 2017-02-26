import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'settings',
  templateUrl: 'settings.html'
})
export class Settings {

  brightness: number = 12;
  temperatureAir: number = 23;
  humidityRange: any = { lower: 40, upper: 60 };

  temperatureWater: number = 22;
  pHRange: any = { lower: 7.2, upper: 8.0 };

  text: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

}
