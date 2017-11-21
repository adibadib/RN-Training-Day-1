// @flow
import map from '../Example';

it('should map array of numbers', () => {
  let z = map([], num => num * 2);
  expect(z).toEqual([]);
  let g = map([1, 2, 3], num => num * 2);
  expect(g).toEqual([2, 4, 6]);
});

it('should map array of objects', () => {
  let people = [{name: 'John', age: 23}, {name: 'Bob', age: 81}];
  let z = map(people, person => person.name);
  expect(z).toEqual(['John', 'Bob']);
});
