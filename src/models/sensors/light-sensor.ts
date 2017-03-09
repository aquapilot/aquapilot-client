import {AbstractSensor} from "./abstract-sensor";
import {SensorKind} from "./sensor-kind";

export class LightSensor extends AbstractSensor {

    constructor(){
      super("LIGHT_SENSOR", "add", SensorKind.PLANT);
    }

}
