import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {SensorType, WaterSensors, PlantSensors} from "../../models/sensor-type";
import {AbstractSensor} from "../../models/sensors/abstract-sensor";
import {SupportedSensors} from "../../models/sensors/supported-sensors";

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

  public sensors: Array<AbstractSensor> = SupportedSensors.getAll();
  public plantSensors: Array<string> = PlantSensors.names();


  constructor(public navCtrl: NavController, public navParams: NavParams) {


  }

  ionViewDidLoad() {

    console.log('ionViewDidLoad NewSensorPage');
  }

}
