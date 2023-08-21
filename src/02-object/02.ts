type LocalCityType= {
    country: string,
    city: string
}

type AddressType={
    street: string,
    city: LocalCityType
}

type TechnologiesType= {
    id: number,
    title: string
}

export type StudentType={
    name: string,
    age: number,
    isActive: boolean,
    address: AddressType,
    technologies: TechnologiesType[]
}
