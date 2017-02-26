enum AquaticSystemType {
  AQUARIUM_TYPE = 1,
  AQUAPONIC_TYPE = 2,
  HYDROPONIC_TYPE = 3
}

namespace AquaticSystemType {
  function isIndex(key):boolean {
    const n = ~~Number(key);
    return String(n) === key && n >= 0;
  }

  const _names:string[] = Object
    .keys(AquaticSystemType)
    .filter(key => !isIndex(key));

  const _indices:number[] = Object
    .keys(AquaticSystemType)
    .filter(key => isIndex(key))
    .map(index => Number(index));

  export function names():string[] {
    return _names;
  }

  export function indices():number[] {
    return _indices;
  }

  export function valueOf(_type:string):AquaticSystemType{

    return AquaticSystemType[_type];

  }
}

export { AquaticSystemType };
