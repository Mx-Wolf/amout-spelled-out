import { getRawNameAndTwenty } from "./name-and-twenty";
import { getPlurality } from "./plurality";
import {
  isFeminine,
  names,
  reverseSystematicGroups,
  SystematicGroup,
} from "./systematic-class";
import { getThreeDigits } from "./three-digits";

const THOUSAND = 1e3;

function number_parser(_num: number, _desc: SystematicGroup) {
  if (_num === 0) {
    if (_desc === SystematicGroup.unit) {
      return "рублей";
    } else {
      return "";
    }
  }
  
  let [_string, plu] = getRawNameAndTwenty(getThreeDigits(_num));
  
  if (isFeminine.get(_desc)) {
    _string = _string.replace("один ", "одна ");
    _string = _string.replace("два ", "две ");
  }
  _string += names.get(_desc)?.get(getPlurality(plu));
  _string = _string.replace("  ", " ");
  return _string;
}

function decimals_parser(_num: number) {
  const u = _num % 10;
  const t = Math.floor(_num / 10);

  let _string = " " + t + u;

  if (t !== 1) {
    if (u === 1) {
      _string += " копейка";
    } else if (u > 1 && u < 5) {
      _string += " копейки";
    } else {
      _string += " копеек";
    }
  } else {
    _string += " копеек";
  }
  return _string;
}

function rubsToString(rubs: number) {
  if (rubs <= 0) {
    return "ноль рублей";
  }
  return reverseSystematicGroups
    .map((g) => {
      const de = THOUSAND ** g;
      const v = Math.floor((rubs / de) % THOUSAND);
      return number_parser(v, g);
    })
    .join(" ");
}

export function amountSpelledOut(_number: number | undefined) {
  if (typeof _number !== "number") {
    throw new Error("Numbers only");
  }
  if (!isFinite(_number)) {
    throw new Error("finite numbers only");
  }
  if (_number <= 0) {
    throw new Error("Positive numbers only");
  }
  const cents = Math.floor((_number * 100) % 100);

  const rubs = Math.floor(_number);

  const res = rubsToString(rubs);

  const r1 = (res + decimals_parser(cents)).replace(/\s+/g, " ").trim();
  return r1[0].toLocaleUpperCase() + r1.substring(1);
}
