function DeleteUserAction(userId) {
  this.type = 'DELETE-USER';
  this.payload = {
    userId: userId
  }
}

const action1 = new DeleteUserAction(1111);
const action2 = new DeleteUserAction(2222);
console.log(action1);
console.log(action2);




function User(name, site, dob) {
  this.name = name;
  this.site= site;
  this.dateOfBirth = dob;
}
User.prototype.hello = function (){
  console.log(`I am ${this.name} from ${this.site} and ${this.dateOfBirth}`)
}

const u1 = userFabric('Petr1', 'it-incubator.by', new Date(1995, 6, 23));
const u2 = userFabric('Petr2', 'it-incubator2.by', new Date(1995, 6, 23));

console.log(u1);
console.log(u2);
