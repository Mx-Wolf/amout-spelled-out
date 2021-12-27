export const getThreeDigits = (
  numerical: number
): [h: number, t: number, u: number] => {
  return [
    Math.floor(numerical / 100),
    Math.floor((numerical % 100) / 10),
    numerical % 10,
  ];
};
