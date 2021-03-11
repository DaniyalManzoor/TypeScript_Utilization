const addUID = <T extends { name: string }>(obj: T) => {
  let uid = Math.floor(Math.random() * 1000);
  return { ...obj, uid };
};
let docOne = addUID({ name: "dani", age: 24 });
// let docTwo = addUID("dani")

console.log(docOne.age);

interface Resource<T> {
  uid: number;
  resourceName: string;
  data: T;
}
const docThree: Resource<string[]> = {
  uid: 1,
  resourceName: "person",
  data: ["Hussain", "Samad", "GM"],
};
const docFour: Resource<object> = {
  uid: 2,
  resourceName: "shopingList",
  data: { product1: "Tie" },
};
