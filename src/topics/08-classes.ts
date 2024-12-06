export class Person {
  constructor(
    public firstName: string,
    public lastName: string,
    public address: string = "Cusco"
  ) {}
}

// export class Hero extends Person {
//   constructor(
//     public alterEgo: string,
//     public age: number,
//     public realName: string
//   ) {
//     super(realName, "San Isidro");
//   }
// }

export class Hero {
  constructor(
    public alterEgo: string,
    public age: number,
    public realName: string,
    public person: Person
  ) {}
}
const tony = new Person("Tony", "Stark");
const ironman = new Hero(
  "Ironman",
  25,
  `${tony.firstName} ${tony.lastName}`,
  tony
);

console.log(ironman);
