export type ManType = {
  name: string
  age: number
}

export const people: ManType[] = [
  {name: 'Andrey Ivanov', age: 33},
  {name: 'Ivan Petrov', age: 24},
  {name: 'Peter Suvorov', age: 18},
]

const devs = [
  {
    stack: ['css, html', 'js', 'tdd', 'react'],
    firstName: 'Andrey', lastName: 'Ivanov'
  },
  {
    stack: ['css, html', 'js', 'tdd', 'react'],
    firstName: 'Ivan', lastName: 'Petrov'
  },
  {
    stack: ['css, html', 'js', 'tdd', 'react'],
    firstName: 'Peter', lastName: 'Suvorov'
  }
]

const transformMan = () => {
  people.map((el) => (
    {
      stack: ['css, html', 'js', 'tdd', 'react'],
      firstName: el.name.split(' ')[0],
      lastName: el.name.split(' ')[1]
    }
  ))
}

export const createGreetingMessage = (people: ManType[]) => {
  return people.map((el) => `Hello ${el.name.split(' ')[0]}, welcome to IT-incubator`)
}

