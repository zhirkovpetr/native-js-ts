import {CityType, GovernmentBuildingsType} from "../02-object/02_02";

const AgePiople= [12, 22, 44, 66, 88, 99, 100, 102]
const predicate= (age: number) => {
    return age> 91
}
const OldPiople= AgePiople.filter(predicate);

export type cursesType={
    title: string
    price: number
}


export function demoLishHousesOnTheStreet(city: CityType, street: string){
    city.houses= city.houses.filter(h=> h.address.street.title !== street)
}

export const getBuildingsWithStaffCountGreaterThen= (buildings: GovernmentBuildingsType[], number: number)=> {
    return buildings= buildings.filter(b=> b.staffCount > number)
}
