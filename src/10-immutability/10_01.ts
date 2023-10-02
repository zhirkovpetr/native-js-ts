export type UserType = {
  name: string
  hair: number
  address: {
    city: string
    house: number
  }
}

export type LaptopType = {
  title: string
}

export type UserWithLaptopType = UserType & {
  laptop: LaptopType
}

export function makeHairStyle(user: UserType, power: number) {
  return {...user, hair: user.hair / power}
}

export function moveUser(user: UserWithLaptopType, city: string) {
  return {...user, address: {...user.address, title: city}}
}

export function upgradeUserLaptop(user: UserWithLaptopType, title: string) {
  return {...user, laptop: {...user.laptop, title}}
}



