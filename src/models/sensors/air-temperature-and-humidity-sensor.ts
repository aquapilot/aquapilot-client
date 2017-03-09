import {AbstractSensor} from "./abstract-sensor";
import {SensorKind} from "./sensor-kind";

export class AirTemperatureAndHumiditySensor extends AbstractSensor {

    constructor(){
      super("AIR_TEMP_AND_HUMIDITY_SENSOR", "thermometer", SensorKind.PLANT);
    }

}
