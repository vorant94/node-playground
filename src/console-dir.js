const value = {
  foo: 'bar',
  hello: undefined,
  world: null,
};

console.log('raw log:');
console.log(value);
console.log('==========');
console.log('raw log with prefix: ', value);
console.log('==========');

console.dir('raw dir:');
console.dir(value);
console.log('==========');
console.dir('raw dir with prefix: ', value);
console.log('==========');

console.log('JSON.stringify: ', JSON.stringify(value));
console.log('==========');
console.log('JSON.stringify with indent: ', JSON.stringify(value, null, 2));
console.log('==========');
