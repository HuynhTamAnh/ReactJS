function logFunctionDetails<T extends (...args: any[]) => any>(
  targetFunction: T
): T {
  return function (...args: Parameters<T>): ReturnType<T> {
    console.log(`Function name: ${targetFunction.name}`);
    console.log(`Input arguments: ${JSON.stringify(args)}`);

    const result = targetFunction.apply(add, args);

    console.log(`Result: ${result}`);

    return result;
  } as T;
}

function add(a: number, b: number): number {
  return a + b;
}

const loggedAdd = logFunctionDetails(add);

loggedAdd(5, 3);
