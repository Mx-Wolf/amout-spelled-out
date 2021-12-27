const numerals = [
  [],
  ['', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять', 'десять', 'одиннадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'],
  ['', '', 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'],
  ['', 'сто', 'двести', 'триста', 'четыреста', 'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот']
];
const units = 1;
const tens = 2;
const hundreds = 3;
const names = [
  ["рубль", "рубля", "рублей"],
  ["тысяча", "тысячи", "тысяч"],
  ["миллион", "миллиона", "миллионов"],
  ["миллиард", "миллиарда", "миллиардов"]
];
const isFeminine = [
  false, //рубль
  true, //тысяча
  false, //миллион
  false, //миллиард
];

function number_parser(_num: number, _desc: number) {
  if (_num === 0) {
    if (_desc === 0) {
      return "рублей";
    } else {
      return "";
    }
  }
  const numerical = _num;
  const h = Math.floor(numerical / 100);
  const t = Math.floor((numerical % 100) / 10);
  const u = numerical % 10;
  let _string = '';
  let plu = -1;
  if (h > 0) {
    _string = numerals[hundreds][h] + ' ';
  }
  if (t < 2) {
    plu = t * 10 + u;
    _string += numerals[units][plu] + ' ';
  } else {
    _string += numerals[tens][t] + ' ' + numerals[units][u] + ' ';
    plu = u;
  }
  if (isFeminine[_desc]) {
    _string = _string.replace('один ', 'одна ');
    _string = _string.replace('два ', 'две ');
  }
  const plurality = plu === 1 ? 0 : plu > 1 && plu < 5 ? 1 : 2;
  _string += names[_desc][plurality];
  _string = _string.replace('  ', ' ');
  return _string;
}
function decimals_parser(_num: number) {

  const u = _num % 10;
  const t = Math.floor(_num / 10);

  let _string = ((' ' + t) + u);

  if (t !== 1) {
    if (u === 1) {
      _string += " копейка";
    } else if (u > 1 && u < 5) {
      _string += " копейки";
    } else {
      _string += " копеек"
    }
  } else {
    _string += " копеек"
  }
  return _string;
}

function rubsToString(rubs: number) {
  if (rubs <= 0) {
    return "ноль рублей";
  }
  return [3, 2, 1, 0].map((g) => {
    const th = 1000;
    const de = (th ** g);
    const v = Math.floor((rubs / de) % th);
    return number_parser(v, g);
  }).join(" ");
}

export function amountSpelledOut(_number: number | undefined) {

  if (typeof _number !== "number") {
    throw new Error("Numbers only");
  }
  if(!isFinite(_number)){
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