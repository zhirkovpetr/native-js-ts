export type usersType={
   [ key: string]: {id: number, name: string}
}

export const users: usersType= {
   '101': {id: 101, name: 'Dimych'},
   '34576': {id: 34576, name: 'Natasha'},
   '196295992': {id: 196295992, name: 'Valery'},
   '1': {id: 1, name: 'Katya'}
}

let user= {id: 100500, name: 'Sergo'}

users[user.id]= user
delete users [user.id]
users[user.id].name= 'Ilia'

export let usersArray= [
    {id: 101, name: 'Dimych'},
    {id: 34576, name: 'Natasha'},
    {id: 196295992, name: 'Valery'},
    {id: 1, name: 'Katya'}
]
usersArray.push(user)
usersArray.find(u=> u.id ===1)
/*
let usersArray= usersArray.filter(u=> u.id !== user.id)*/
