import {AirTemperatureAndHumiditySensor} from "./air-temperature-and-humidity-sensor";
import {AbstractSensor} from "./abstract-sensor";
import {LightSensor} from "./light-sensor";
import {WaterLevelSensor} from "./water-level-sensor";
import {WaterTemperatureSensor} from "./water-temperature-sensor";
import {SensorKind} from "./sensor-kind";
export class SupportedSensors {

  public static getAll() {
    var sensors:Array<AbstractSensor> = [];
    sensors.push(new AirTemperatureAndHumiditySensor());
    sensors.push(new LightSensor());
    sensors.push(new WaterLevelSensor());
    sensors.push(new WaterTemperatureSensor());

    return sensors;
  }

  private static getSensorsForKind( _kind:SensorKind) {

    var sensors: Array<AbstractSensor> = [];

    var fullList = this.getAll();
    for (var i = 0; i < fullList.length; i++) {
      if (fullList[i].getKind() == _kind) {
        sensors.push(fullList[i]);
      }

    }
    return sensors;
  }


  public static getWaterSensors() {
    return this.getSensorsForKind(SensorKind.WATER);
  }

  public static getPlantSensors() {
    return this.getSensorsForKind(SensorKind.PLANT);
  }

}
