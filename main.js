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
