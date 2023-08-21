import {CityType} from "./02_02";

let city: CityType;

beforeEach(() =>{
    city={
        title: 'New York',
        houses: [
            {buildAt: 2012,
                repaired: false,
                address: {number: 100, street: {title: "White street"}}
            },
            {buildAt: 2008,
                repaired: false,
                address: {number: 100, street: {title: "Happy street"}}
            },
            {buildAt: 2020,
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

test("test should contains 3 houses", ()=> {
    expect(city.houses.length).toBe(3);
    expect(city.houses[0].buildAt).toBe(2012);
    expect(city.houses[0].repaired).toBe(false);
    expect(city.houses[0].address.number).toBe(100);
    expect(city.houses[0].address.street.title).toBe("White street");
    expect(city.houses[1].buildAt).toBe(2008);
    expect(city.houses[1].repaired).toBe(false);
    expect(city.houses[1].address.number).toBe(100);
    expect(city.houses[1].address.street.title).toBe("Happy street");
    expect(city.houses[2].buildAt).toBe(2020);
    expect(city.houses[2].repaired).toBe(false);
    expect(city.houses[2].address.number).toBe(101);
    expect(city.houses[2].address.street.title).toBe("Happy street");
})

test("test should contains hospital and fire station", ()=> {
    expect(city.builtAt.length).toBe(2);
    expect(city.builtAt[0].type).toBe("HOSPITAL");
    expect(city.builtAt[0].budget).toBe(200000);
    expect(city.builtAt[0].staffCount).toBe(200);
    expect(city.builtAt[0].address.street.title).toBe("Central street");
    expect(city.builtAt[1].type).toBe("FIRE-STATION");
    expect(city.builtAt[1].budget).toBe(500000);
    expect(city.builtAt[1].staffCount).toBe(1000);
    expect(city.builtAt[1].address.street.title).toBe("South street");
})
