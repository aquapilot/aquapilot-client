import {AirTemperatureAndHumiditySensor} from "./air-temperature-and-humidity-sensor";
import {AbstractSensor} from "./abstract-sensor";
import {LightSensor} from "./light-sensor";
import {WaterLevelSensor} from "./water-level-sensor";
import {WaterTemperatureSensor} from "./water-temperature-sensor";
export class SupportedSensors {

  public static getAll() {
    var sensors:Array<AbstractSensor> = [];
    sensors.push(new AirTemperatureAndHumiditySensor());
    sensors.push(new LightSensor());
    sensors.push(new WaterLevelSensor());
    sensors.push(new WaterTemperatureSensor());

    return sensors;
  }

}
