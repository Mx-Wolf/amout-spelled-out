export const enum Plurality {
  SINGLE = 0,
  FEW = 1,
  MANY = 2,
}

export const getPlurality = (plu: number) =>
  plu === 1 ? Plurality.SINGLE : plu > 1 && plu < 5 ? Plurality.FEW : Plurality.MANY;
