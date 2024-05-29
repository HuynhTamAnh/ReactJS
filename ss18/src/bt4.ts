
type ValidationFunction<T extends any[]> = (...args: T) => boolean;

function validateParameters<T extends (...args: any[]) => any>(
  targetFunction: T,
  validationFunction: ValidationFunction<Parameters<T>>
): T {
  return function (...args: Parameters<T>): ReturnType<T> {
    if (validationFunction(...args)) {
      return targetFunction.apply(add3, args);
    } else {
      throw new Error("Invalid arguments provided.");
    }
  } as T;
}

function validateAddArguments(a: number, b: number): boolean {
  return typeof a === "number" && typeof b === "number" && a >= 0 && b >= 0;
}


function add3(a: number, b: number): number {
  return a + b;
}


const validatedAdd = validateParameters(add3, validateAddArguments);

try {
  console.log(validatedAdd(5, 3)); 
  console.log(validatedAdd(-1, 3)); 
} catch (error) {
  console.error(error.message);
}

try {
  console.log(validatedAdd(5, "3" as any)); /
} catch (error) {
  console.error(error.message);
}
