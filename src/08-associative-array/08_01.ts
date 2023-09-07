import {UsersType} from "./08.test";

export const users: UsersType = {
  '101': {id: 101, name: 'Petr'},
  '34576': {id: 34576, name: 'Natasha'},
  '196295992': {id: 196295992, name: 'Valery'},
  '1': {id: 1, name: 'Katya'}
}

let user = {id: 100500, name: 'Den'}

users[user.id] = user
delete users [user.id]
users[user.id].name = 'Ilia'

export let usersArray = [
  {id: 101, name: 'Petr'},
  {id: 34576, name: 'Natasha'},
  {id: 196295992, name: 'Valery'},
  {id: 1, name: 'Katya'}
]
usersArray.push(user)
usersArray.find(u => u.id === 1)


let usersArrays = usersArray.filter(u => u.id !== user.id) && [...usersArray, user]
console.log(usersArrays)
