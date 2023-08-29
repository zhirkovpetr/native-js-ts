import {CityType} from "../02-object/02_02";
import {createMessages, getStreetTitlesOfGovernmentsBuildings, getStreetTitlesOfHouses} from "./05_02";

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

test('list of streets titles of goverments buildings', () => {
  let streetsNames = getStreetTitlesOfGovernmentsBuildings(city.builtAt)

  expect(streetsNames.length).toBe(2)
  expect(streetsNames[0]).toBe("Central street")
  expect(streetsNames[1]).toBe("South street")
})

test('list of streets titles', () => {
  let streetsNames = getStreetTitlesOfHouses(city.houses)

  expect(streetsNames.length).toBe(3)
  expect(streetsNames[0]).toBe("White street")
  expect(streetsNames[1]).toBe("Happy street")
  expect(streetsNames[1]).toBe("Happy street")
})

test('create greating message for streets', () => {
  let messages = createMessages(city.houses)

  expect(messages.length).toBe(3)
  expect(messages[0]).toBe("Hello guys from White street")
  expect(messages[1]).toBe("Hello guys from Happy street")
  expect(messages[2]).toBe("Hello guys from Happy street")
})
