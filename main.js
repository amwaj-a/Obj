let user = {
  name: "Ali",
  email: "email@otulook.com",
  id: 123456789,
  available: false,
  isAvailable: function () {
    if (this.available) {
      console.log("Available is True ");
    } else console.log("Available is False");
  },
  address: {
    city: {
      cityLeave: "Madinah",
      cityWork: "riyadh",
    },
    homeNumber: 1042,
    street: " omer bin areb",
  },
  skills: ["reading", "programming", "sleeping"],
};
console.log(user);
console.log(` Name  : ${user.name}`);
user.id = "1111111111";
delete user.email;
console.log("delete email && change id");
console.log(user);

user.available = true;
console.log(`  change available`);
user.isAvailable();
console.log(user.address);
console.log(` Keys inside city : `);
console.log(user.address.city);
console.log(` skill : ${user.skills[2]}`);
// console.log(` address : ${user.address}`);

console.log(user.skills.join());

// -------------------------------------------------Lab 2
console.log("-----------------------------------lab 2----------------");

characters = [
  {
    name: "Luke Skywalker",
    height: 177,
    gender: "male",
    mass: 77,
    eye_color: "brown",
  },
  {
    name: "Leia Organa",
    height: 160,
    gender: "female",
    mass: 56,
    eye_color: "blue",
  },
  {
    name: "Han Solo",
    height: 180,
    gender: "male",
    mass: 80,
    eye_color: "brown",
  },
  {
    name: "Chewie",
    height: 222,
    gender: "male",
    mass: 190,
    eye_color: "black",
  },
  {
    name: "kevien",
    height: 106,
    gender: "male",
    mass: 32.2,
    eye_color: "red",
  },
];

// 1-Get first name that has blue eyes.
let nameBlueEyes = characters.map((e) => {
  if (e.eye_color == "blue") {
    return e.name;
  }
});

console.log(`first name that has blue eyes.\t ${nameBlueEyes}`);

// 2-Get first gender that is his mass is over 50

let taller = characters.map((e) => e.height);
let male = characters.map((e) => {
  if (e.gender == "male") {
    return e.name;
  } else {
    return;
  }
});
let mass = characters.map((e) => e.mass);

console.log(`height less than 200\t ${taller.filter((e) => e < 200)}`);

console.log(`all male\t ${male}`);
console.log(`all Name\t ${characters.map((e) => e.name)}`);

console.log(`all Height \t ${taller}`);

let sortMass = mass.sort((a, b) => a - b);
console.log(`Sort Mass\t ${sortMass}`);
let sortHeight = taller.sort((a, b) => b - a);
console.log(`Sort Height\t ${sortHeight}`);
console.log(mass.every((e) => e > 40));

console.log(taller.every((e) => e < 200));

let someBlue = characters.map((e) => e.eye_color).some((e) => e == "blue");
console.log(someBlue);

console.log(taller.some((e) => e > 210));
