export type StreetType = {
  title: string
}
export type AddressType = {
  number: number,
  street: StreetType
}

export type TypeStreet = {
  title: string
}
export type TypeAddress = {
  street: TypeStreet
}

export type HousesType = {
  id?: number
  buildAt: number,
  repaired: boolean,
  address: AddressType
}

export type GovernmentBuildingsType = {
  type: "HOSPITAL" | "FIRE-STATION",
  budget: number,
  staffCount: number,
  address: TypeAddress
}

export type CityType = {
  title: string,
  houses: HousesType[],
  builtAt: GovernmentBuildingsType[],
  citizensNumber: number
}
