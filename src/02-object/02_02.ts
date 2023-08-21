export type StreetType = {
    title: string
}
export type AdressType={
    number: number,
    street: StreetType
}

export type TypeStreet = {
    title: string
}
export type TypeAdress={
    street: TypeStreet
}

export type housesType= {
    id?: number
    buildedAt: number,
    repaired: boolean,
    adress: AdressType
}

export type GovernmentBuildingsType ={
    type: "HOSPITAL"| "FIRE-STATION",
    budget: number,
    staffCount: number,
    adress: TypeAdress
}

export type CityType={
    title: string,
    houses: housesType[],
    govermentBuildings: GovernmentBuildingsType[],
    citizensNumber: number
}
