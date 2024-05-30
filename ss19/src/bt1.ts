function logDecorator() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
      console.log(`Function name: ${propertyKey}`);
      console.log(`Arguments: ${JSON.stringify(args)}`);
      const result = originalMethod.apply(this, args);
      console.log(`Result: ${result}`);
      return result;
    };

    return descriptor;
  };
}

class People {
  @logDecorator()
  a(a: number, b: number) {
    return a + b;
  }
}

const person = new People();
person.a(5, 10);
