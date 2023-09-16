type usertype = {
  name: string
  age: number
  address?: { title: string }
}

const icreaseAge = (user: usertype) => {
  user.age++
}

test("reference type test", () => {
  let user = {
    name: 'Petr',
    age: 28
  }
  icreaseAge(user)
  expect(user.age).toBe(29);

  const superman = user
  superman.age = 1000
  expect(user.age).toBe(1000);
})

test("array test", () => {
  let users = [
    {name: 'Petr', age: 28},
    {name: 'Andrey', age: 33},
  ]
  let admins = users
  admins.push({name: 'Dmitry', age: 11})

  expect(users[2]).toEqual({name: 'Dmitry', age: 11});
})

test("value type test", () => {
  let usersCount = 100
  let adminsCount = usersCount + 1

  expect(usersCount).toBe(100);
  expect(adminsCount).toBe(101);
})

test("value type test", () => {
  let user = {
    name: 'Petr',
    age: 28,
    address: {
      title: 'Minsk'
    }
  }
  let user2 = {
    name: 'Alena',
    age: 25,
    address: user.address
  }

  user2.address.title = 'Kanary'

  expect(user.address.title).toBe('Kanary');
  expect(user.address).toBe(user2.address);
})


test("reference type array test", () => {

  const address = {
    title: 'Minsk'
  }

  let user = {
    name: 'Petr',
    age: 28,
    address: address
  }
  let user2 = {
    name: 'Alena',
    age: 25,
    address: address
  }

  const users = [user, user2, {name: 'Katya', age: 4, address: address}]
  const admins = [user, user2]
  admins[0].name = 'Petya'

  expect(users[2]).toEqual({name: 'Katya', age: 4, address: address});
  expect(user.name).toBe('Petya');
})

test("sort array test", () => {
  const letters = ['c', 'd', 'a', 'z', 'e']
  passportist(letters)
  letters.sort()
  expect(letters).toEqual(['a', 'c', 'd', 'e', 'z']);
})

function passportist(letters: string[]) {
  const copyLetters = [...letters].sort()
  console.log(copyLetters)
}






