import {addMoneyToBudget, greatMessage, repairedHouse, toFaceStaff, toHairStaff} from "./03";
import {CityType} from "../02-object/02_02";

let city: CityType;

beforeEach(() => {
  city = {
    title: 'New York',
    houses: [
      {
        buildAt: 2012,
        repaired: false,
        address: {number: 100, street: {title: "White street"}}
      },
      {
        buildAt: 2008,
        repaired: false,
        address: {number: 100, street: {title: "Happy street"}}
      },
      {
        buildAt: 2020,
        repaired: false,
        address: {number: 101, street: {title: "Happy street"}}
      }
    ],
    builtAt: [
      {
        type: "HOSPITAL",
        budget: 200000,
        staffCount: 200,
        address: {street: {title: "Central street"}}
      },
      {
        type: "FIRE-STATION",
        budget: 500000,
        staffCount: 1000,
        address: {street: {title: "South street"}}
      }],
    citizensNumber: 1000000
  }
})

test("add money to budget for HOSPITAL", () => {
  addMoneyToBudget(city.builtAt[0], 100000)
  expect(city.builtAt[0].budget).toBe(300000);
})

test("add money to budget for FIRE-STATION", () => {
  addMoneyToBudget(city.builtAt[1], -100000)
  expect(city.builtAt[1].budget).toBe(400000);
})

test("house should be repaired", () => {
  repairedHouse(city.houses[1])
  expect(city.houses[1].repaired).toBeTruthy();
})

test("staff should be increased", () => {
  toFaceStaff(city.builtAt[1], 900)
  expect(city.builtAt[1].staffCount).toBe(100);
})

test("staff should be repaired", () => {
  toHairStaff(city.builtAt[0], 20)
  expect(city.builtAt[0].staffCount).toBe(220);
})

test("greeting message should be correct for city", () => {
  const message = greatMessage(city)
  expect(message).toBe("Hello New York citizens. I want you be happy! All 1000000 mens!");
})


