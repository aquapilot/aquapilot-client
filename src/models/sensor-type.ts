/**
 * Created by Sebastien on 08.03.2017.
 */
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
