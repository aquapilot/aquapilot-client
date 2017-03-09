import {AbstractSensor} from "./abstract-sensor";
import {SensorKind} from "./sensor-kind";

export class WaterLevelSensor extends AbstractSensor {

    constructor(){
      super("WATER_LEVEL_SENSOR", "add", SensorKind.WATER);
    }

}
