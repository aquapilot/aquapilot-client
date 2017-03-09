/**
 * Created by Sebastien on 08.03.2017.
 */
export class Enum<T, U> {

  public constructor(public readonly name: T, public readonly icon: U) {}

  public getName() {
    return this.name.toString();
  }

  public getIcon() {
    return this.icon.toString();
  }

}

export class SensorType extends Enum<string, string> {

}

export class WaterSensors extends SensorType {

  public static readonly WATER_TEMP_SENSOR = new Enum('WATER_TEMP_SENSOR', 'add');
  public static readonly WATER_LEVEL_SENSOR = new Enum('WATER_LEVEL_SENSOR', 'add');
  public static readonly BROKEN_TANK_SENSOR = new Enum('BROKEN_TANK_SENSOR', 'add');

  public static names() {
    return Object.keys(WaterSensors);
  }

}

export class PlantSensors extends SensorType {
  public static readonly AIR_TEMP_SENSOR = new Enum('AIR_TEMP_SENSOR', 'add');
  public static readonly AIR_TEMP_AND_HUMIDITY_SENSOR = new Enum('AIR_TEMP_AND_HUMIDITY_SENSOR', 'add');
  public static readonly LIGHT_SENSOR = new Enum('LIGHT_SENSOR', 'add');

  public static names() {
    return Object.keys(PlantSensors);
  }
}

/*
enum SensorType {
  WATER_TEMP_SENSOR = 1,
  WATER_LEVEL_SENSOR = 2,
  BROKEN_TANK_SENSOR = 3,
  AIR_TEMP_SENSOR = 4,
  AIR_TEMP_AND_HUMIDITY_SENSOR = 5,
  LIGHT_SENSOR = 6
}

namespace SensorType {
  function isIndex(key):boolean {
    const n = ~~Number(key);
    return String(n) === key && n >= 0;
  }

  const _names:string[] = Object
    .keys(SensorType)
    .filter(key => !isIndex(key));

  const _indices:number[] = Object
    .keys(SensorType)
    .filter(key => isIndex(key))
    .map(index => Number(index));

  export function names():string[] {
    return _names;
  }

  export function indices():number[] {
    return _indices;
  }

  export function valueOf(_type:string):SensorType{

    return SensorType[_type];

  }
}

export { SensorType };
*/
