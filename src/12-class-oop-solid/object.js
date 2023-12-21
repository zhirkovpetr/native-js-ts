const deleteUser = (userId) => {
  const action = {
    type: 'DELETE-USER',
    payload: {
      userId: userId
    }
  }
  return action;
}

const action1 = deleteUser('12112122');
const action2 = deleteUser('44444444');

console.log(action1);
console.log(action2);

function commonHello() {
  console.log(`I am ${this.name} from ${this.site}`)
}

const userFabric = (name) => {
  const user = {
    name: name,
    site: 'it-incubator.by',
    dateOfBirth: new Date(1988, 1, 2),
    hello: commonHello,
  }
  return user;
}

const u1 = userFabric('Petr1');
const u2 = userFabric('Petr2');

console.log(u1);
console.log(u2);

