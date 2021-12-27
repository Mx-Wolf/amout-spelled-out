import { getSegmentName } from "./numberals";
import { NumericalClass } from "./numerical-class";

export const getRawNameAndTwenty = ([h, t, u]: [h: number, t: number, u: number]): [
  _string: string,
  plu: number
] => {
  let _string = "";
  if (h > 0) {
    _string = getSegmentName(NumericalClass.hundreds, h) + " ";
  }
  if (t < 2) {
    const plu = t * 10 + u;
    _string += getSegmentName(NumericalClass.units, plu) + " ";
    return [_string, plu];
  } else {
    _string +=
      getSegmentName(NumericalClass.tens, t) +
      " " +
      getSegmentName(NumericalClass.units, u) +
      " ";
    return [_string, u];
  }
};
