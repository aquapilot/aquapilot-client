import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {SensorType} from "../../models/sensor-type";

/*
  Generated class for the NewSensor page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-new-sensor',
  templateUrl: 'new-sensor.html'
})
export class NewSensorPage {

  public sensors: Array<string> = SensorType.names();


  constructor(public navCtrl: NavController, public navParams: NavParams) {


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewSensorPage');
  }

}
