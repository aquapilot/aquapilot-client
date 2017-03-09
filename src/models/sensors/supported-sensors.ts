import {AirTemperatureAndHumiditySensor} from "./air-temperature-and-humidity-sensor";
import {AbstractSensor} from "./abstract-sensor";
import {LightSensor} from "./light-sensor";
import {WaterLevelSensor} from "./water-level-sensor";
import {WaterTemperatureSensor} from "./water-temperature-sensor";
export class SupportedSensors {

  private static sensors:Array<AbstractSensor> = [];

  public static getAll() {

    this.sensors.push(new AirTemperatureAndHumiditySensor());
    this.sensors.push(new LightSensor());
    this.sensors.push(new WaterLevelSensor());
    this.sensors.push(new WaterTemperatureSensor());

    return this.sensors;
  }

}
