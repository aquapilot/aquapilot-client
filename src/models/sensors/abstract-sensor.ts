import {SensorKind} from "./sensor-kind";
export abstract class AbstractSensor {

  private icon:string;
  private key:string;
  private kind:SensorKind;

  constructor( _key:string, _icon:string, _kind:SensorKind){
    this.key = _key;
    this.icon = _icon;
    this.kind = _kind;
  }

  public getKey() {
    return this.key;
  }

  public getIcon() {
    return this.icon;
  }

  public getKind(){
    return this.kind;
  }
}
