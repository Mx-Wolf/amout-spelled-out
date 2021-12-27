import { NumericalClass } from "./numerical-class";

export const numerals:ReadonlyMap<NumericalClass,ReadonlyArray<string>> = new Map<NumericalClass, ReadonlyArray<string>>([
  [
    NumericalClass.units,
    [
      "",
      "один",
      "два",
      "три",
      "четыре",
      "пять",
      "шесть",
      "семь",
      "восемь",
      "девять",
      "десять",
      "одиннадцать",
      "двенадцать",
      "тринадцать",
      "четырнадцать",
      "пятнадцать",
      "шестнадцать",
      "семнадцать",
      "восемнадцать",
      "девятнадцать",
    ],
  ],
  [
    NumericalClass.tens,
    [
      "",
      "",
      "двадцать",
      "тридцать",
      "сорок",
      "пятьдесят",
      "шестьдесят",
      "семьдесят",
      "восемьдесят",
      "девяносто",
    ],
  ],
  [
    NumericalClass.hundreds,
    [
      "",
      "сто",
      "двести",
      "триста",
      "четыреста",
      "пятьсот",
      "шестьсот",
      "семьсот",
      "восемьсот",
      "девятьсот",
    ],
  ],
]);

export const getSegmentName = (numericalClass: NumericalClass, value:number):string =>{
  const names = numerals.get(numericalClass);
  if(!Array.isArray(names)){
    return '';
  }
  const result = names[value];
  if(typeof result === 'undefined'){
    return '';
  }
  return result;
}
