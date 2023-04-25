const c = "hello world";
var arr = c.split(" ");
var r = "";
arr.forEach((val) => {
  for (let i = val.length - 1; i >= 0; i--) {
    r += val[i];
  }
  r += " ";
});
console.log(r.trim());

const list = [
  { id: 1, name: "Suresh", age: 30, address: "Hyderabad" },
  { id: 2, name: "Saritha", age: 28, address: "Hyderabad" },
  { id: 3, name: "Divya", age: 25, address: "Vijayawada" },
  { id: 4, name: "Madhav", age: 22, address: "Vijayawada" },
  { id: 5, name: "Jayanth", age: 23, address: "Pune" }
];

let map = () => {
  return list?.map((obj) => obj.name);
};
// console.log(map());

let filter = () => {
  return list.filter((obj) => obj.age > 25);
};
//console.log(filter());

const find = () => {
  return list?.find((obj) => obj.id === 5);
};
//console.log(find());
const sort = () => {
  return list?.sort((obj1, obj2) =>
    obj1.age > obj2.age ? 1 : obj2.age > obj1.age ? -1 : 0
  );
};
//console.log(sort());
