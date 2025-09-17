arr = [10, 5, 6, 20, 30, 15, 0, 189];
const OddSqr = () =>
  console.log(arr.filter((value) => value % 2).map((value) => value * value));
OddSqr();
