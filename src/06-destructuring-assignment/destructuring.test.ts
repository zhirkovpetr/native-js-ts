import {ManType} from "./destructuring";

let props: ManType;
beforeEach(() => {
  props = {
    name: 'Petr',
    age: 28,
    lessons: [{title: '1'}, {title: '2', name: 'react'}, {title: '3'}],
    address: {
      street: {
        title: 'Nezavisimosti street'
      }
    }
  }
})

test('', () => {
  //const age = props.age
  //const lessons = props.lessons
  const {age, lessons} = props
  const title = props.address.street.title

  expect(age).toBe(28)
  expect(lessons.length).toBe(2)
  expect(title).toBe('Nezavisimosti street')
})

test('dfsdsf', () => {
const l1 = props.lessons[0]
const l2 = props.lessons[1]

  const [,ls2, ...restLesson] = props.lessons

  expect(l1.title).toBe('1')
  expect(l2.title).toBe('2')

  expect(ls2.title).toBe('2')
  expect(restLesson.length).toBe(1)
  expect(restLesson[0].title).toBe('3')
  expect(ls2).toStrictEqual({title: '2', name: 'react'})
})
