
type localcityType= {
    country: string,
    city: string
}

type adressType={
    streat: string,
    city: localcityType
}
type technologesType= {
    id: number,
    title: string
}
export type studentType={
    name: string,
    age: number,
    isActive: boolean,
    adress: adressType,
    technologes: Array<technologesType>
}
