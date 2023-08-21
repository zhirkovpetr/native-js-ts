import {CityType} from "./02_02";

let city: CityType;

beforeEach(() =>{
    city={
        title: 'New York',
        houses: [
            {buildedAt: 2012,
                repaired: false,
                adress: {number: 100, street: {title: "White street"}}
            },
            {buildedAt: 2008,
                repaired: false,
                adress: {number: 100, street: {title: "Happy street"}}
            },
            {buildedAt: 2020,
                repaired: false,
                adress: {number: 101, street: {title: "Happy street"}}
            }
        ],
        govermentBuildings:[
            {type: "HOSPITAL",
             budget: 200000,
             staffCount: 200,
             adress: {street: {title: "Central street"}}
        },
            {type: "FIRE-STATION",
                budget: 500000,
                staffCount: 1000,
                adress: {street: {title: "South street"}}
        }],
        citizensNumber: 1000000
    }
})

test("test should contains 3 houses", ()=> {
    expect(city.houses.length).toBe(3);

    expect(city.houses[0].buildedAt).toBe(2012);
    expect(city.houses[0].repaired).toBe(false);
    expect(city.houses[0].adress.number).toBe(100);
    expect(city.houses[0].adress.street.title).toBe("White street");

    expect(city.houses[1].buildedAt).toBe(2008);
    expect(city.houses[1].repaired).toBe(false);
    expect(city.houses[1].adress.number).toBe(100);
    expect(city.houses[1].adress.street.title).toBe("Happy street");

    expect(city.houses[2].buildedAt).toBe(2020);
    expect(city.houses[2].repaired).toBe(false);
    expect(city.houses[2].adress.number).toBe(101);
    expect(city.houses[2].adress.street.title).toBe("Happy street");
})

test("test should contains hospital and fire station", ()=> {
    expect(city.govermentBuildings.length).toBe(2);

    expect(city.govermentBuildings[0].type).toBe("HOSPITAL");
    expect(city.govermentBuildings[0].budget).toBe(200000);
    expect(city.govermentBuildings[0].staffCount).toBe(200);
    expect(city.govermentBuildings[0].adress.street.title).toBe("Central street");

    expect(city.govermentBuildings[1].type).toBe("FIRE-STATION");
    expect(city.govermentBuildings[1].budget).toBe(500000);
    expect(city.govermentBuildings[1].staffCount).toBe(1000);
    expect(city.govermentBuildings[1].adress.street.title).toBe("South street");
})
