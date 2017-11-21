// @flow

export default function map(array: Array<mixed>, fn: Function): Array<mixed> {
  let newArray = [];
  for (let item of array) {
    newArray.push(fn(item));
  }
  return newArray;
}
