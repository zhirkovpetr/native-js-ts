import {
  addNewCompany,
  makeHairStyle,
  moveUser,
  moveUserToOtherHouse, removeBook, updateCompany, updateCompanyArray, upgradeArrayBooks, upgradeBooks,
  upgradeUserLaptop,
  UserType,
  UserWithBooksType, UserWithCompaniesType,
  UserWithLaptopType
} from "./10_01";

test('reference type test', () => {
  let user: UserType = {
    name: 'Petr',
    hair: 70,
    address: {
      city: 'Minsk',
      house: 12
    }
  }
  const newUser = makeHairStyle(user, 7)

  expect(user.hair).toBe(70)
  expect(newUser.hair).toBe(10)
  expect(newUser.address).toBe(user.address)
})

test('change address', () => {
  let user: UserWithLaptopType = {
    name: 'Petr',
    hair: 70,
    address: {
      city: 'Minsk',
      house: 12
    },
    laptop: {
      title: 'Legion 5'
    }
  }
  const newUser = moveUser(user, 'Moscow')

  expect(user.address.city).toBe('Minsk')
  expect(newUser.address.title).toBe('Moscow')
  expect(user.address.city).not.toBe(newUser.address.title)
  expect(user.laptop.title).toBe(newUser.laptop.title)
})

test('upgrade laptop to macbook', () => {
  let user: UserWithLaptopType = {
    name: 'Petr',
    hair: 70,
    address: {
      city: 'Minsk',
      house: 12
    },
    laptop: {
      title: 'Legion 5'
    }
  }
  const newUser = upgradeUserLaptop(user, 'Macbook Pro')

  expect(user.laptop.title).toBe('Legion 5')
  expect(newUser.laptop.title).toBe('Macbook Pro')
  expect(user.laptop).not.toBe(newUser.laptop)
  expect(user.address).toBe(newUser.address)
})

test('upgrade house number', () => {
  let user: UserWithLaptopType & UserWithBooksType = {
    name: 'Petr',
    hair: 70,
    address: {
      city: 'Minsk',
      house: 12
    },
    laptop: {
      title: 'Legion 5'
    },
    books: ['HTML', 'CSS', 'JS', 'REACT']
  }
  const newUser = moveUserToOtherHouse(user, 14)

  expect(user.laptop).toBe(newUser.laptop)
  expect(user.books).toBe(newUser.books)
  expect(user.address.house).toBe(12)
  expect(newUser.address.house).toBe(14)
  expect(user.address).not.toBe(newUser.address)
})

test('add array new books to user', () => {
  let user: UserWithLaptopType & UserWithBooksType = {
    name: 'Petr',
    hair: 70,
    address: {
      city: 'Minsk',
      house: 12
    },
    laptop: {
      title: 'Legion 5'
    },
    books: ['HTML', 'CSS', 'JS', 'REACT']
  }
  const newUser = upgradeArrayBooks(user, ['Redux', 'MobX'])

  expect(user.laptop).toBe(newUser.laptop)
  expect(user.address).toBe(newUser.address)
  expect(user.books).toStrictEqual(['HTML', 'CSS', 'JS', 'REACT'])
  expect(newUser.books).toStrictEqual(['Redux', 'MobX', 'HTML', 'CSS', 'JS', 'REACT'])
  expect(user.books).not.toBe(newUser.books)
})
test('change Redux book', () => {
  let user: UserWithLaptopType & UserWithBooksType = {
    name: 'Petr',
    hair: 70,
    address: {
      city: 'Minsk',
      house: 12
    },
    laptop: {
      title: 'Legion 5'
    },
    books: ['HTML', 'CSS', 'JS', 'REACT', 'Redux']
  }
  const newUser = upgradeBooks(user, 'Redux', 'MobX')

  expect(user.laptop).toBe(newUser.laptop)
  expect(user.address).toBe(newUser.address)
  expect(user.books).toStrictEqual(['HTML', 'CSS', 'JS', 'REACT', 'Redux'])
  expect(newUser.books).toStrictEqual(['HTML', 'CSS', 'JS', 'REACT', 'MobX'])
  expect(user.books).not.toBe(newUser.books)
})

test('remove JS book', () => {
  let user: UserWithLaptopType & UserWithBooksType = {
    name: 'Petr',
    hair: 70,
    address: {
      city: 'Minsk',
      house: 12
    },
    laptop: {
      title: 'Legion 5'
    },
    books: ['HTML', 'CSS', 'JS', 'REACT', 'Redux']
  }
  const newUser = removeBook(user, 'JS')

  expect(user.laptop).toBe(newUser.laptop)
  expect(user.address).toBe(newUser.address)
  expect(user.books).toStrictEqual(['HTML', 'CSS', 'JS', 'REACT', 'Redux'])
  expect(newUser.books).toStrictEqual(['HTML', 'CSS', 'REACT', 'Redux'])
  expect(user.books).not.toBe(newUser.books)
})

test('add new company', () => {
  let user: UserWithLaptopType & UserWithCompaniesType = {
    name: 'Petr',
    hair: 70,
    address: {
      city: 'Minsk',
      house: 12
    },
    laptop: {
      title: 'Legion 5'
    },
    companies: [
      {id: 1, title: 'Epam'},
      {id: 2, title: 'Google'}
    ]
  }
  const newUser = addNewCompany(user, 'JetBrains')

  expect(user.laptop).toBe(newUser.laptop)
  expect(user.address).toBe(newUser.address)
  expect(user.companies.length).toBe(2)
  expect(user.companies).not.toBe(newUser.companies)
  expect(newUser.companies.length).toBe(3)
  expect(newUser.companies[2]).toStrictEqual({id: 3, title: 'JetBrains'})
})

test('update company', () => {
  let user: UserWithLaptopType & UserWithCompaniesType = {
    name: 'Petr',
    hair: 70,
    address: {
      city: 'Minsk',
      house: 12
    },
    laptop: {
      title: 'Legion 5'
    },
    companies: [
      {id: 1, title: 'еПаМ'},
      {id: 2, title: 'Google'}
    ]
  }
  const newUser = updateCompany(user, 1, 'Epam')

  expect(user.laptop).toBe(newUser.laptop)
  expect(user.address).toBe(newUser.address)
  expect(user.companies[0]).toStrictEqual({id: 1, title: 'еПаМ'})
  expect(newUser.companies[0]).toStrictEqual({id: 1, title: 'Epam'})
  expect(user.companies).not.toBe(newUser.companies)
})

test('update company with array', () => {
  let companies = {
    'petr': [{id: 1, title: 'Epam'},{id: 2, title: 'Google'}],
    'andrey': [{id: 1, title: 'Codex'},{id: 2, title: 'Google'}],
  }

  const newCompanies = updateCompanyArray(companies, 'andrey', 2, 'Yandex')

  expect(companies['andrey']).toStrictEqual([{id: 1, title: 'Codex'},{id: 2, title: 'Google'}])
  expect(companies['petr']).toStrictEqual([{id: 1, title: 'Epam'},{id: 2, title: 'Google'}])
  expect(newCompanies['andrey']).toStrictEqual([{id: 1, title: 'Codex'},{id: 2, title: 'Yandex'}])
  expect(companies['petr']).toBe(newCompanies['petr'])
  expect(companies['andrey']).not.toBe(newCompanies['andrey'])
})
