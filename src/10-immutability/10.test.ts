import {makeHairStyle, moveUser, upgradeUserLaptop, UserType, UserWithLaptopType} from "./10_01";

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
