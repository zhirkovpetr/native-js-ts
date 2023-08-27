import {demoLishHousesOnTheStreet} from "./04";
import {getBuildingsWithStaffCountGreaterThen} from  "./04"
import {CityType} from "../02-object/02_02";

let city: CityType;

beforeEach(() =>{
    city={
        title: 'New York',
        houses: [
            {
                id: 1,
                buildAt: 2012,
                repaired: false,
                address: {number: 100, street: {title: "White street"}}
            },
            {
                id: 2,
                buildAt: 2008,
                repaired: false,
                address: {number: 100, street: {title: "Happy street"}}
            },
            {
                id: 3,
                buildAt: 2020,
                repaired: false,
                address: {number: 101, street: {title: "Happy street"}}
            }
        ],
        builtAt:[
            {type: "HOSPITAL",
                budget: 200000,
                staffCount: 200,
                address: {street: {title: "Central street"}}
            },
            {type: "FIRE-STATION",
                budget: 500000,
                staffCount: 1000,
                address: {street: {title: "South street"}}
            }],
        citizensNumber: 1000000
    }
})



test("Houses should be destroyed", ()=> {
    demoLishHousesOnTheStreet(city, 'Happy street')

    expect(city.houses.length).toBe(1);
    expect(city.houses[0].id).toBe(1);
})



test("buildings with correct staff count", ()=> {

    let buildings= getBuildingsWithStaffCountGreaterThen(city.builtAt, 500);

    expect(buildings.length).toBe(1);
    expect(buildings[0]).toBe('FIRE-STATION');

})
