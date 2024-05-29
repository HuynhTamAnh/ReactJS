type Func = (...args: any[]) => any;

function cachingDecorator<T extends Func>(targetFunction: T): T {
  const cache: Record<string, ReturnType<T>> = {};

  const wrappedFunction = function (...args: Parameters<T>): ReturnType<T> {
    const cacheKey = JSON.stringify(args);

    if (cacheKey in cache) {
      console.log("Returning cached result for", cacheKey);
      return cache[cacheKey];
    }

    const result = targetFunction.apply(add2, args);

    cache[cacheKey] = result;

    return result;
  };

  return wrappedFunction as T;
}

function add2(a: number, b: number): number {
  console.log(`Computing add(${a}, ${b})`);
  return a + b;
}

const cachedAdd = cachingDecorator(add2);

console.log(cachedAdd(5, 3));
console.log(cachedAdd(5, 3));
console.log(cachedAdd(2, 3));
console.log(cachedAdd(5, 3));
