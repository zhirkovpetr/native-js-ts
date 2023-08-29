import {createGreetingMessage, ManType} from "./05_01";

let people: ManType[] = []

beforeEach(() => {
  people = [
    {name: 'Andrey Ivanov', age: 33},
    {name: 'Ivan Petrov', age: 24},
    {name: 'Peter Suvorov', age: 18},
  ]
})

test("should get array of greeting messages", () => {
  const message = createGreetingMessage(people)

  expect(message.length).toBe(3);
  expect(message[0]).toBe('Hello Andrey, welcome to IT-incubator');
  expect(message[1]).toBe('Hello Ivan, welcome to IT-incubator');
  expect(message[2]).toBe('Hello Peter, welcome to IT-incubator');
})

