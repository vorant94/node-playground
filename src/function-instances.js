function fullNameDeclaration() {
  return `${this?.firstName} ${this?.lastName}`;
}

const fullNameExpression = function () {
  return `${this?.firstName} ${this?.lastName}`;
};

const fullNameArrow = () => {
  return `${this?.firstName} ${this?.lastName}`;
};

class Person {
  constructor(firstName, lastName, fullName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = fullName;
  }

  fullNameMethodDeclaration() {
    return `${this?.firstName} ${this?.lastName}`;
  }

  fullNameMethodExpression = function () {
    return `${this?.firstName} ${this?.lastName}`;
  };

  fullNameMethodArrow = () => {
    return `${this?.firstName} ${this?.lastName}`;
  };
}

const greg = new Person('greg', 'johnson', fullNameDeclaration);
const zack = new Person('mark', 'zuckergberg', fullNameExpression);
const phil = new Person('phil', 'zacker', fullNameArrow);

console.log('function is passed as argument scope');
console.log('==========');
console.log('declaration: ', greg.fullName());
console.log('expression: ', zack.fullName());
console.log('arrow: ', phil.fullName());
console.log('==========');

console.log('class method instancing');
console.log(
  'declaration: ',
  phil.fullNameMethodDeclaration === zack.fullNameMethodDeclaration,
);
console.log(
  'expression: ',
  phil.fullNameMethodExpression === zack.fullNameMethodExpression,
);
console.log('arrow: ', phil.fullNameMethodArrow === zack.fullNameMethodArrow);

// const Apple = (type) => {
// const Apple = function (type) {
function Apple(type) {
  //  doesn't work with arrow functions
  this.type = type;
  this.color = 'red';
  this.getInfo = function () {
    return this.color + ' ' + this.type + ' apple';
  };
}

//  doesn't work with arrow functions
Apple.prototype.getInfoExternal = function () {
  return this.color + ' ' + this.type + ' apple';
};

const mac = new Apple('macintosh');
const nonMac = new Apple('non-macintosh');

console.log('function constructor method instancing');
console.log('internal: ', mac.getInfo === nonMac.getInfo);
console.log(
  'external via prototype: ',
  mac.getInfoExternal === nonMac.getInfoExternal,
);
