import { Plurality } from "./plurality";

export const enum SystematicGroup{
  unit = 0,
  thousand = 1,
  million = 2,
  milliard = 3,
}
export const reverseSystematicGroups = [
  SystematicGroup.milliard,
  SystematicGroup.million,
  SystematicGroup.thousand,
  SystematicGroup.unit,
]

export const names = new Map<SystematicGroup, Map<Plurality, string>>([
  [
    SystematicGroup.unit,
    new Map<Plurality, string>([
      [Plurality.SINGLE, "рубль"],
      [Plurality.FEW, "рубля"],
      [Plurality.MANY, "рублей"],
    ]),
  ],
  [
    SystematicGroup.thousand,
    new Map<Plurality, string>([
      [Plurality.SINGLE, "тысяча"],
      [Plurality.FEW, "тысячи"],
      [Plurality.MANY, "тысяч"],
    ]),
  ],
  [
    SystematicGroup.million,
    new Map<Plurality, string>([
      [Plurality.SINGLE, "миллион"],
      [Plurality.FEW, "миллиона"],
      [Plurality.MANY, "миллионов"],
    ]),
  ],
  [
    SystematicGroup.milliard,
    new Map<Plurality, string>([
      [Plurality.SINGLE, "миллиард"],
      [Plurality.FEW, "миллиарда"],
      [Plurality.MANY, "миллиардов"],
    ]),
  ],
]);

export const isFeminine = new Map<SystematicGroup, boolean>([
  [SystematicGroup.unit, false],
  [SystematicGroup.thousand, true],
  [SystematicGroup.million, false],
  [SystematicGroup.milliard, false],
]);
