import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {SensorService} from "../../services/sensor-service";

/*
  Generated class for the Water page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-water',
  templateUrl: 'water.html',
  providers: [SensorService]
})
export class WaterPage {

  public currentWaterTemperature:number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public sensorService: SensorService) {

    sensorService.getLastWaterTemperatureMeasures(1).subscribe(
      items => {
        if(items && items.length > 0 && items[0].value) {

          this.currentWaterTemperature = items[0].value;
        }
      }
    );

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WaterPage');
  }

}
