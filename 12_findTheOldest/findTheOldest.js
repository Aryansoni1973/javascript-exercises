const people = [
  { name: "Carly", yearOfBirth: 1066, },
  { name: "Ray", yearOfBirth: 1962, yearOfDeath: 2011, },
  { name: "Jane", yearOfBirth: 1912, yearOfDeath: 1941, },
];
const findTheOldest = function () {
  let oldestPerson = people[0];
  for (let i = 1; i < people.length; i++) {
    const currentYear = new Date().getFullYear();
    const currentAge = (people[i].yearOfDeath || currentYear) - people[i].yearOfBirth;
    const oldestAge = (oldestPerson.yearOfDeath || currentYear) - oldestPerson.yearOfBirth;
    if (currentAge > oldestAge) {
      oldestPerson = people[i];
    }
  }
  return oldestPerson.name;
};

console.log(findTheOldest(people));

// Do not edit below this line
module.exports = findTheOldest;
