import isArray from './utils';

export function min(...args) {
  let minumum;

  if (args === undefined || args.length === 0) {
    return undefined;
  }

  if (!isArray(...args)) {
    minumum = Math.min(...args);
  } else {
    const arr1 = args.reduce((a, b) => [...a, ...b], []);
    minumum = Math.min(...arr1);
  }
  return minumum;
}

export function copy(args) {
  let objClone;
  if (!isArray(args)) {
    objClone = { ...args };
  } else {
    objClone = args.reduce((a, b) => [...a, ...b], []);
  }
  return objClone;
}

export function reverseMerge(...args) {
  return [...args[1], ...args[0]];
}

export function filterAttribs({ a, b, ...rest }) {
  return rest;
}
