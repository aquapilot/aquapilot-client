import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {SensorService} from "../../services/sensor-service";

/*
  Generated class for the Air page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-air',
  templateUrl: 'air.html',
  providers:[SensorService]
})
export class AirPage {

  public currentAirHumidity:number;
  public currentAirTemperature:number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public sensorService: SensorService) {

    sensorService.getLastHumidityMeasures(1).subscribe(
      items => {
        if(items && items.length > 0 && items[0].value) {
          this.currentAirHumidity = items[0].value;
        }
      }
    );

    sensorService.getLastAirTemperatureMeasures(1).subscribe(
      items => {
        if(items && items.length > 0 && items[0].value) {
          this.currentAirTemperature = items[0].value;
        }
      }
    );

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AirPage');
  }

}
