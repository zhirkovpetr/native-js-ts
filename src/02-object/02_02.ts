export type streetType = {
    title: string
}
export type adressType={
    number: number,
    street: streetType
}

export type typeStreet = {
    title: string
}
export type TypeAdress={
    street: typeStreet
}

export type housesType= {
    id?: number
    buildedAt: number,
    repaired: boolean,
    adress: adressType
}

export type governmentBuildingsType ={
    type: "HOSPITAL"| "FIRE-STATION",
    budget: number,
    staffCount: number,
    adress: TypeAdress
}

export type CityType={
    title: string,
    houses: Array <housesType>,
    govermentBuildings: Array<governmentBuildingsType>,
    citizensNumber: number
}
