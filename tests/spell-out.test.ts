import { amountSpelledOut } from "../src/index";
import { it } from "mocha";
import { expect } from "chai";
describe("amountSpelledOut", () => {
  it("throws error on undefined", () => {
    expect(() => amountSpelledOut(undefined)).throw();
  });
  it("throws on negative number", () => {
    expect(() => amountSpelledOut(-1)).throw();
  });
  it("throws on NaN", () => {
    expect(() => amountSpelledOut(Number.NaN)).throw();
  });
  it("throws on zero", () => {
    expect(() => amountSpelledOut(0)).throw();
  });
  it("работает с несколькими копейками", () => {
    expect(amountSpelledOut(0.01)).eq("Ноль рублей 01 копейка");
  });
  it("работает с несколькими рублями", () => {
    expect(amountSpelledOut(1)).eq("Один рубль 00 копеек");
  });
  it("для 4", () => {
    expect(amountSpelledOut(4)).eq("Четыре рубля 00 копеек");
  });
  it("для 10", () => {
    expect(amountSpelledOut(10)).eq("Десять рублей 00 копеек");
  });
  it("для 20", () => {
    expect(amountSpelledOut(20)).eq("Двадцать рублей 00 копеек");
  });
  it("для 25", () => {
    expect(amountSpelledOut(25)).eq("Двадцать пять рублей 00 копеек");
  });
  it("для 25.02", () => {
    expect(amountSpelledOut(25.02)).eq("Двадцать пять рублей 02 копейки");
  });
  it("для 987654321.98",()=>{
    expect(amountSpelledOut(987654321.98)).eq("Девятьсот восемьдесят семь миллионов шестьсот пятьдесят четыре тысячи триста двадцать один рубль 98 копеек");
  });
  it("для 13050.00",()=>{
    expect(amountSpelledOut(13050.00)).eq("Тринадцать тысяч пятьдесят рублей 00 копеек");
  });
  it("для 11000.00",()=>{
    expect(amountSpelledOut(11000.00)).eq("Одиннадцать тысяч рублей 00 копеек");
  });
  it("для 22000.00",()=>{
    expect(amountSpelledOut(22000.00)).eq("Двадцать две тысячи рублей 00 копеек");
  });
});