enum ResourceType {
  BOOK,
  AUTHOR,
  FILM,
  DIRECTOR,
  PERSON,
}
interface Resource2<T> {
  uid: number;
  resourceType: ResourceType;
  data: T;
}

const docEight: Resource2<object> = {
  uid: 2,
  resourceType: ResourceType.BOOK,
  data: { title: "name of the wind" },
};
const docNine: Resource2<string[]> = {
  uid: 4,
  resourceType: ResourceType.AUTHOR,
  data: ["John", "mosh"],
};
