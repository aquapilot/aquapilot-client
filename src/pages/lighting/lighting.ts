import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {SensorService} from "../../services/sensor-service";
import {FirebaseListObservable} from "angularfire2";

/*
  Generated class for the Lighting page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-lighting',
  templateUrl: 'lighting.html',
  providers:[SensorService]
})
export class LightingPage {

  private brightnessMeasures: FirebaseListObservable<any[]>;

  // lineChart
  public lineChartData:Array<any> = [];

  public lineChartLabels:Array<any> = [];
  public lineChartOptions:any = {
    responsive: true,
    animation : false,
    scales: {
      xAxes: [{
        display: false  // Hide label on x axis
      }],
      yAxes: [{
        ticks: {
          max: 1000,
          min: 0,
          stepSize: 200
        }
      }]
    }
  };
  public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';




  constructor(public navCtrl: NavController, public navParams: NavParams, public sensorService: SensorService) {

    this.lineChartData.push({data: [], label: 'Brightness'});

    this.brightnessMeasures = sensorService.getLastBrightnessMeasures(20);

    this.brightnessMeasures.subscribe(
      items => {



        let _lineChartData:Array<any> = new Array(this.lineChartData.length);

        var _values = items.map(x => x.value);
        this.lineChartLabels.length = 0;

        _lineChartData[0] = {data: new Array(_values.length), label: 'Intensité lumineuse'};
        for (let i = 0; i < _values.length; i++) {
          _lineChartData[0].data[i] = _values[i];
          this.lineChartLabels.push(_values[i]);
        }
        this.lineChartData = _lineChartData;

      }
    );


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LightingPage');
  }

}
