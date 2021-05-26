/** @format */

const superheroes = [
  {
    name: "Batman",
    publisher: "DC Comics",
    alter_ego: "Bruce Wayne",
    first_appearance: "Detective Comics #27",
    weight: "210",
  },
  {
    name: "Superman",
    publisher: "DC Comics",
    alter_ego: "Kal-El",
    first_appearance: "Action Comics #1",
    weight: "220",
  },
  {
    name: "Flash",
    publisher: "DC Comics",
    alter_ego: "Jay Garrick",
    first_appearance: "Flash Comics #1",
    weight: "195",
  },
  {
    name: "Green Lantern",
    publisher: "DC Comics",
    alter_ego: "Alan Scott",
    first_appearance: "All-American Comics #16",
    weight: "186",
  },
  {
    name: "Green Arrow",
    publisher: "DC Comics",
    alter_ego: "Oliver Queen",
    first_appearance: "All-American Comics #16",
    weight: "195",
  },
  {
    name: "Wonder Woman",
    publisher: "DC Comics",
    alter_ego: "Princess Diana",
    first_appearance: "The Incredible Hulk #180",
    weight: "165",
  },
  {
    name: "Blue Beetle",
    publisher: "DC Comics",
    alter_ego: "Dan Garret",
    first_appearance: "Mystery Men Comics #1",
    weight: "145",
  },
  {
    name: "Spider Man",
    publisher: "Marvel Comics",
    alter_ego: "Peter Parker",
    first_appearance: "Amazing Fantasy #15",
    weight: "167",
  },
  {
    name: "Captain America",
    publisher: "Marvel Comics",
    alter_ego: "Steve Rogers",
    first_appearance: "Captain America Comics #1",
    weight: "220",
  },
  {
    name: "Iron Man",
    publisher: "Marvel Comics",
    alter_ego: "Tony Stark",
    first_appearance: "Tales of Suspense #39",
    weight: "250",
  },
  {
    name: "Thor",
    publisher: "Marvel Comics",
    alter_ego: "Thor Odinson",
    first_appearance: "Journey into Myster #83",
    weight: "200",
  },
  {
    name: "Hulk",
    publisher: "Marvel Comics",
    alter_ego: "Bruce Banner",
    first_appearance: "The Incredible Hulk #1",
    weight: "1400",
  },
  {
    name: "Wolverine",
    publisher: "Marvel Comics",
    alter_ego: "James Howlett",
    first_appearance: "The Incredible Hulk #180",
    weight: "200",
  },
  {
    name: "Daredevil",
    publisher: "Marvel Comics",
    alter_ego: "Matthew Michael Murdock",
    first_appearance: "Daredevil #1",
    weight: "200",
  },
  {
    name: "Silver Surfer",
    publisher: "Marvel Comics",
    alter_ego: "Norrin Radd",
    first_appearance: "The Fantastic Four #48",
    weight: "unknown",
  },
];
// Normale lijst met alle superhero objecten
console.log(superheroes);

// Gewicht van de lichtste superheroes en de zwaarste
let LighterOneNinety = superheroes.filter((heroWeight) => heroWeight.weight < "190" - 1);
let twoHundredPounds = superheroes.filter((heroWeight) => heroWeight.weight === "200");
let twoHundredPounds2 = superheroes
  .filter((heroWeight) => heroWeight.weight === "200")
  .map((heroName) => heroName.name);
console.log(LighterOneNinety);
console.log(twoHundredPounds);
console.log(twoHundredPounds2);

// Alle eerste Comics van de helden,
let allComics = superheroes
  .filter((firstComic) => firstComic.first_appearance)
  .map((eersteComic) => eersteComic.first_appearance);
console.log(allComics);

// Alle DC comics heroes
let DcComics = superheroes.filter((Comic) => Comic.publisher === "DC Comics");
console.log(DcComics);

// Alle Marvel Heroes
let Marvel = superheroes.filter((Comic) => Comic.publisher === "Marvel Comics");
console.log(Marvel);

// ----------------------------------------------------------------------------------------------------------------

// het gewicht word in een aparte array gezet.
const weightSum = DcComics.filter((weight) => weight.weight).map((geWicht) => geWicht.weight);
console.log(weightSum);

// haalt de unknown eruit.
var filtered = weightSum.filter(function (el) {
  return el != "unknown";
});
console.log(filtered);

// worden de strings omgezet naar nummers
const nuevo = filtered.map((i) => Number(i));
console.log(nuevo);

// nummers worden hier bij elkaar opgeteld.
const reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log(nuevo.reduce(reducer));

// ----------------------------------------------------------------------------------------------------------------------

// het gewicht word in een aparte array gezet.
const weightSum2 = Marvel.filter((weight) => weight.weight).map((geWicht) => geWicht.weight);
console.log(weightSum2);

// haalt de unknown eruit.
var filtered2 = weightSum2.filter(function (el) {
  return el != "unknown";
});
console.log(filtered2);

// worden de strings omgezet naar nummers
const nuevo2 = filtered2.map((i) => Number(i));
console.log(nuevo2);

// nummers worden hier bij elkaar opgeteld.
const reducer2 = (accumulator, currentValue) => accumulator + currentValue;
console.log(nuevo2.reduce(reducer2));

// Zoek de zwaarste Superheld.

const max = nuevo2.reduce(function (a, b) {
  return Math.max(a, b);
});

console.log(max);
