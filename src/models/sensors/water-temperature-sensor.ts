import {AbstractSensor} from "./abstract-sensor";
import {SensorKind} from "./sensor-kind";

export class WaterTemperatureSensor extends AbstractSensor {

    constructor(){
      super("WATER_TEMP_SENSOR", "thermometer", SensorKind.WATER);
    }

}
