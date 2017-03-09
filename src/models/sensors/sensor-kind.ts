enum SensorKind {
  WATER = 1,
  PLANT = 2
}

namespace SensorKind {
  function isIndex(key):boolean {
    const n = ~~Number(key);
    return String(n) === key && n >= 0;
  }

  const _names:string[] = Object
    .keys(SensorKind)
    .filter(key => !isIndex(key));

  const _indices:number[] = Object
    .keys(SensorKind)
    .filter(key => isIndex(key))
    .map(index => Number(index));

  export function names():string[] {
    return _names;
  }

  export function indices():number[] {
    return _indices;
  }

  export function valueOf(_type:string):SensorKind{
    return SensorKind[_type];
  }
}

export { SensorKind };
