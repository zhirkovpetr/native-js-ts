import {GovernmentBuildingsType, HousesType} from "../02-object/02_02";

export const getStreetTitlesOfGovernmentsBuildings = (buildings: GovernmentBuildingsType[]) => {
  return buildings.map((building) => building.address.street.title)
}

export const getStreetTitlesOfHouses = (buildings: HousesType[]) => {
  return buildings.map((building) => building.address.street.title)
}

export const createMessages = (buildings: HousesType[]) => {
  return buildings.map((building) => `Hello guys from ${building.address.street.title}`)
}
