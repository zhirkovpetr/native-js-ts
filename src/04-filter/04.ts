import {CityType, GovernmentBuildingsType} from "../02-object/02_02";

const AgePiople = [12, 22, 44, 66, 88, 99, 100, 102]

export const predicate = (age: number) => age > 91

AgePiople.filter(predicate);

export type cursesType = {
  title: string
  price: number
}

export const curses: cursesType[] = [
  {title: 'CSS', price: 110},
  {title: 'JS', price: 150},
  {title: 'React', price: 200}
]

export const chipPredicate = (curse: cursesType) => curse.price < 160

export function demolishHousesOnTheStreet(city: CityType, street: string) {
  city.houses = city.houses.filter(h => h.address.street.title !== street)
}

export const getBuildingsWithStaffCountGreaterThen = (buildings: GovernmentBuildingsType[], number: number) => {
  return buildings.filter(b => b.staffCount > number)
}
