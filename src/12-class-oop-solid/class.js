class DeleteUserAction {
  constructor() {
    this.type = 'DELETE-USER';
    this.payload = {
      userId: userId
    }
  }
}

const action1 = new DeleteUserAction(1111);
const action2 = new DeleteUserAction(2222);
console.log(action1);
console.log(action2);



class User {
  _name = ''
  constructor(name, site, dob) {
    this._name = name;
    this.site = site;
    this.dateOfBirth = dob;
    this.counter = 0;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    if(name === 'Igor') throw new Error('Igor is not allowed name')
    this._name = name;
  }

  hello() {
    this.counter++;
    console.log(`I am ${this.name} from ${this.site} and ${this.dateOfBirth}`)
  }
}

const u1 = new User('Petr1', 'it-incubator1.by', new Date(1995, 6, 23))
const u2 = new User('Petr2', 'it-incubator2.by', new Date(1995, 6, 23))

console.log(u1);
console.log(u2);

u1.hello();
console.log(u1.hello === User.prototype.hello)

u1.name = 'Igor'

console.log(u1.hello())


let users = [u1, u2]
users.forEach(u => u.hello())



class Coder extends User {
  constructor(name, site, dob, tech) {
    super(name, site, dob);
    this.tech = tech;
  }
  code() {
    console.log(`I am ${this.name}, here is my ${this.tech} code: const sum = (a, b) => a + b`)
  }
  hello() {
    super.hello();
    console.log('go way!!!')
  }
}

const coder1 = new Coder('Petr Coder!!', 'it-incubator.by', new Date(1995, 6, 23), 'c#')
coder1.code();

class Hacker extends Coder {
  constructor(a,b,c,d) {
    super();
    this.tech='XXX';
    this._name='XXX'
  }
  code() {
    console.log(`I'll hack everything`)
  }
  hello() {
    throw new Error('I am Hacker in the Dark')
  }
}
const hacker = new Hacker('Petr Coder!!', 'it-incubator.by', new Date(1995, 6, 23), 'c#')
hacker.hello();
hacker.code();

let users1 = [u1,u2, coder1, hacker]
users1.forEach(u => u.hello());


var arr = [1, 2]

for (let i=0; i< arr.length; i++) {

}

class SuperArray extends Array {
  get length() {
    return 1000
  }
}

var arr2 = new SuperArray();
console.log(arr2.length)

