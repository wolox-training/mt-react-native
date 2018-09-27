import { isArray } from './utils';

export function min() {
  let minimo;
  let i;

  if (arguments === undefined || arguments.length === 0) {
    return undefined;
  }

  if (!isArray(...arguments)) {
    minimo = Math.min(...arguments);
  } else {
    let arr1=[];
    for (i = 0; i < arguments.length; i++) {
      arr1.push(...(arguments[i]));
    }
    minimo = Math.min(...arr1);
  }
  return minimo;
}

export function copy(args) {
  let objClone;
  let i;
  if (!isArray(...arguments)) {
    objClone = { ...args };
  } else {
    const arr1 = [];
    for (i = 0; i < arguments.length; i++) {
      arr1.push(...(arguments[i]));
    }
    objClone = arr1;
  }

  return objClone;
}

export function reverseMerge(...args) {
  return [...args[1], ...args[0]];
}

export function filterAttribs({ a, b, ...rest }) {
  return rest;
}
