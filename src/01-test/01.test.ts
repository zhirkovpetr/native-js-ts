import {mult, splitIntoWorlds, sum} from "./01";

let a: number;
let b: number;
let c: number;

beforeEach(() => {
  a = 1
  b = 2
  c = 3
})

test('Sum test should be correct', () => {
  const result1 = sum(a, b)
  const result2 = sum(a, c)
  const result3 = sum(b, c)

  expect(result1).toBe(3)
  expect(result2).toBe(4)
  expect(result3).toBe(5)
})

test('Multiply test should be correct', () => {
  const result1 = mult(a, b)
  const result2 = mult(a, c)
  const result3 = mult(b, c)

  expect(result1).toBe(2)
  expect(result2).toBe(3)
  expect(result3).toBe(6)
})



let worldsA: string;
let worldsB: string;

beforeEach(() => {
  worldsA = 'Hello my friends!';
  worldsB = 'JS - the best     programming language';
})

test('Splitting into worlds should be correct', () => {

  const result1 = splitIntoWorlds(worldsA)
  const result2 = splitIntoWorlds(worldsB)

  expect(result1.length).toBe(3)
  expect(result1[0]).toBe('hello')
  expect(result1[1]).toBe('my')
  expect(result1[2]).toBe('friends')

  expect(result2.length).toBe(5)
  expect(result2[0]).toBe('js')
  expect(result2[1]).toBe('the')
  expect(result2[2]).toBe('best')
  expect(result2[3]).toBe('programming')
  expect(result2[4]).toBe('language')
})
