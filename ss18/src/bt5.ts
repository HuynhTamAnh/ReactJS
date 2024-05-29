function chainFunctions<T extends (...args: any[]) => any>(...funcs: T[]): T {
  return function (...args: any[]): any {
    return funcs.reduce((result, func) => {
      return [func.apply(add, Array.isArray(result) ? result : [result])];
    }, args)[0];
  } as T;
}

function add(a: number, b: number): number {
  return a + b;
}

function square(n: number): number {
  return n * n;
}

function halve(n: number): number {
  return n / 2;
}

const addSquareHalve = chainFunctions(add, square, halve);

const result = addSquareHalve(3, 2);
console.log(result);
