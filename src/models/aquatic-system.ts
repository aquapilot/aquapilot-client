import {AquaticSystemType} from "./aquatic-system-type";
export class AquaticSystem {
  public $key: string;
  public uuid: string;
  public name: string;
  public createdAt: Date;
  public type: AquaticSystemType;

  constructor(_name:string, _type:AquaticSystemType){
    this.name = _name;
    this.type = _type;
  }

}
