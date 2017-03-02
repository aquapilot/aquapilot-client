/**
 * Created by Sebastien on 07.02.2017.
 */
import {Injectable} from "@angular/core";
import {AngularFire, FirebaseListObservable} from 'angularfire2';

@Injectable()
export class SensorService {

  private brightnessMeasures: FirebaseListObservable<any[]>;
  private humidityMeasures: FirebaseListObservable<any[]>;
  private airMeasures: FirebaseListObservable<any[]>;
  private waterMeasures: FirebaseListObservable<any[]>;


  constructor(public angularFire: AngularFire){

  }

  public getLastBrightnessMeasures(amount:number){

    this.brightnessMeasures = this.angularFire.database.list('/measures/Culture/brightness', {
      query: {
        orderByChild: 'timestamp',
        limitToLast: amount
      }
    });

      return this.brightnessMeasures;

  }

  public getLastHumidityMeasures(amount:number){

    this.humidityMeasures = this.angularFire.database.list('/measures/Culture/humidity', {
      query: {
        orderByChild: 'timestamp',
        limitToLast: amount
      }
    });

    return this.humidityMeasures;

  }

  public getLastAirTemperatureMeasures(amount:number) {

    this.airMeasures = this.angularFire.database.list('/measures/Culture/temperature', {
      query: {
        orderByChild: 'timestamp',
        limitToLast: amount
      }
    });

    return this.airMeasures;

  }

  public getLastWaterTemperatureMeasures(amount:number) {

    this.waterMeasures = this.angularFire.database.list('/measures/Aquarium/temperature', {
      query: {
        orderByChild: 'timestamp',
        limitToLast: amount
      }
    });

    return this.waterMeasures;

  }

}
