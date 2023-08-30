import {HousesType} from "../02-object/02_02";

export const createMessages = (buildings: HousesType[]) => {
  let callback = (building: HousesType) => `Hello guys from ${building.address.street.title}`
  return buildings.map(callback)
};
