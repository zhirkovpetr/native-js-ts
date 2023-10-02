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

export type UserWithBooksType = UserType & {
  books: string[]
}

export type UserWithCompaniesType = UserType & {
  companies: {
    id: number
    title: string
  }[]
}

export type CompaniesType = {
  [key: string]: {
    id: number
    title: string
  }[]
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

export function moveUserToOtherHouse(user: UserWithLaptopType & UserWithBooksType, house: number) {
  return {...user, address: {...user.address, house}}
}

export function upgradeArrayBooks(user: UserWithLaptopType & UserWithBooksType, newBooks: string[]) {
  return {...user, books: [...newBooks,...user.books]}
}

export function upgradeBooks(user: UserWithLaptopType & UserWithBooksType, oldBook: string, newBook: string) {
  return {...user, books: user.books.map(b => b === oldBook ? newBook : b)}
}

export function removeBook(user: UserWithLaptopType & UserWithBooksType, removeBook: string) {
  return {...user, books: user.books.filter(b => b !== removeBook)}
}

export function addNewCompany(user: UserWithLaptopType & UserWithCompaniesType, title: string) {
  return {...user, companies: [...user.companies, {id: 3, title}]}
}

export function updateCompany(user: UserWithLaptopType & UserWithCompaniesType, id: number, title: string) {
  return {...user, companies: user.companies.map(c => c.id === id ? {...c, title: title} : {...c})}
}

export function updateCompanyArray(companies: CompaniesType, userName: string, companyId: number, newTitle: string) {
  return {...companies, [userName]: companies[userName].map(c => c.id === companyId ? {...c, title: newTitle} : {...c})}
}
