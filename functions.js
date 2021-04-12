/* Opdracht 0: voorbeeld */
// Schrijf een functie die de string "Goedemorgen" teruggeeft
// ---- Verwacht uitkomst bij het aanroepen van de functie: "Goedemorgen"

function morningGreeter() {
  return "Goedemorgen";
}

const greeting = morningGreeter();

console.log(greeting);

/* Opdracht 1 */
// Schrijf een functie genaamd getSchool, die de string "Novi Hogeschool" teruggeeft
// ---- Verwachte uitkomst bij het aanroepen van de functie: "Novi Hogeschool"

function institute() {
  return "Novi Hogeschool";
}
//loggen via aangemaakte variabele
const school = institute();
console.log(school);
//of loggen door de functie rechtstreeks in de log te stoppen
console.log(institute());


/* Opdracht 2 */
// Schrijf een functie genaamd compliment, die jou een complimentje geeft!
// ---- Verwachte uitkomst bij het aanroepen van de functie: "Lekker bezig met die functies, Jan!"

function compliment(name) {
  return name + " je bent un kanon!"
}
const name = "Gaetan";
console.log(compliment(name));

function compliment2 (name2) {
  return name2 + " dat heb je goed gedaan!"
}
console.log(compliment2("Henk"));



/* Opdracht 3 */
// Schrijf een functie genaamd getGrades, die een array met de cijfers 8, 8.5, 6 en 7 teruggeeft.
// ---- Verwachte uitkomst bij het aanroepen van de functie: [8, 8.5, 6, 7]

function getGrades() {
  return [8, 8.5, 6, 7];
}

console.log(getGrades());

const grades = getGrades();
console.log(grades);




/* Opdracht 4 */
// Schrijf een functie genaamd getDetails, die een object met daarin jouw eigen naam en achternaam teruggeeft.
// ---- Verwachte uitkomst bij het aanroepen van de functie: { firstName: 'Jan', lastName: 'Janssen' }


function details(firstname, lastname) {
  return "voornaam: " + firstname + " achternaam: " + lastname;
}

const firstname = "Gaetan";
const lastname = "Asselberghs";
console.log(details(firstname, lastname));

//of door een nieuwe variabele te maken:
const output = details(firstname, lastname);
console.log(output);
