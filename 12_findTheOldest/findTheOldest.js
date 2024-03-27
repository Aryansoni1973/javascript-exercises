const people = [
  { name: "Carly", yearOfBirth: 1066, },
  { name: "Ray", yearOfBirth: 1962, yearOfDeath: 2011, },
  { name: "Jane", yearOfBirth: 1912, yearOfDeath: 1941, },
];

// Function to find the oldest person
const findTheOldest = (people) => {
  const currentYear = new Date().getFullYear();
  people.forEach(person => {
    if (!person.yearOfDeath) person.yearOfDeath = currentYear;
    person.age = person.yearOfDeath - person.yearOfBirth;
  });
  people.sort((a, b) => b.age - a.age);
  return people[0].name;
}


// Do not edit below this line
module.exports = findTheOldest;
