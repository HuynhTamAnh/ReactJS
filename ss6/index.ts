//dấdfádfádf
let a: number[] = [1, 3, 5];
const sum = (a: number[]) => {
  return a.reduce((temp: number, sum: number) => temp + sum, 0);
};
console.log(sum(a));
const sum1 = (a: number, b: number): number => {
  return a + b;
};
let numberOrString: number | string = "hung";
//khai báo mảng
//c1:
let arr: any[] = [1, 2, 3, 4, 5];
//c2:
let arr1 = new Array(10);
let arr2: Array<number> = [1, 2, 3, 4];
//khai báo đối tượng
