/* Opdracht 0: voorbeeld */
// Schrijf een functie genaamd add, die twee getallen verwacht, die bij elkaar optelt en teruggeeft
// ---- Verwachte uitkomsten:
// add(1, 4) geeft 5
// add(2, 5) geeft 7

function add(a, b) {
  return a + b;
}
const result = add(1, 4);
console.log(result);


/* Opdracht 1 */
// Schrijf een functie genaamd greeter, die een naam verwacht en een groet teruggeeft
// ---- Verwachte uitkomsten:
// greeter("Jan") geeft "Hoi Jan!"
// greeter("Kees") geef "Hoi Kees!"

function greeter (name) {
  return "Hoi "+ name;
}

console.log(greeter("Henk"));



/* Opdracht 2 */
// Schrijf een functie genaamd minutesToSeconds, die een hoeveelheid minuten verwacht (als een getal) en teruggeeft hoeveel seconden dat zijn.
// ---- Verwachte uitkomsten:
// minutesToSeconds(1) geeft 60
// minutesToSeconds(3) geeft 180
// minutesToSeconds(23) geft 1380


function minToSec (minutes){
  return minutes * 60;
}

for (minutes=1; minutes<11; minutes++) {

  if(minutes === 1) {
    console.log(minutes + " minuut bestaat uit " + minToSec(minutes) + " seconden.");
  }
  else {
    console.log(minutes + " minuten bestaan uit " + minToSec(minutes) + " seconden.");
  }
}




/* Opdracht 3 */
// Schrijf een functie genaamd merge, die twee strings verwacht en deze aan elkaar geplakt teruggeeft.
// Let op: je mag hier geen String methoden voor gebruiken zoals concat().
// ---- Verwachte uitkomsten:
// merge("abra", "cadabra") geeft "abracadabra"
// merge("zoet", "sappig") geeft "zoetsappig"

function merge (first,last){
  return first + last;
}
const total = merge("abra", "cadabra");
console.log(total);





/* Opdracht  4 */
// Schrijf een functie genaamd calculateDogYears die de hondenleeftijd verwacht en dit omrekent naar mensenjaren (1 tot 7). Op basis daarvan wordt een zinnetje teruggegeven.
// ---- Verwachte uitkomsten:
// calculateDogYears(6) geeft "Jouw hond is 42 jaar oud in mensenjaren."
// calculateDogYears(2) geeft "Jouw hond is 14 jaar oud in mensenjaren."

function calculateDogYears (dogAge) {
  return dogAge * 7
}
const animalAge = 7
const humanAge = calculateDogYears(animalAge);
console.log("Een hond van " + animalAge + " jaar oud, is vergelijkbaar met een mens van " + humanAge + " jaar oud.");


/* Opdacht 5 */
// Schrijf een functie genaamd wrapper, die twee parameters verwacht: een woord en een karakter
// De functie omwikkelt het woord met het karakter en geeft dit terug
// ---- Verwachte uitkomsten:
// wrapper("bril", "*") geeft "*bril*"
// wrapper("beep", "_") geeft "_beep_"
// wrapper("kaas", "Q") geeft "QkaasQ"

function wrapper (word, character) {
  return character + word + character;
}

// de wrapper gedeclareerd met twee namen als een nieuwe variabele: wrapped
const wrapped = wrapper("sterretjes", "*");
console.log(wrapped);

//de wrapper pas gedeclareerd in de console log
console.log(wrapper("sterretjes", "*"));



/* Bonus opdracht  */
// Schrijf een functie genaamd createDetailString, die een object met de properties firstName, lastName en profession verwacht en een zin teruggeeft
// ---- Verwachte uitkomsten:
// createDetailString({ firstName: 'Jan', lastName: 'Jansen', profession: 'docent'}) geeft "Het beroep vam Jan Jansen is docent."
// createDetailString({ firstName: 'Kees', lastName: 'Klaasen', profession: 'brandweerman'}) geeft "Het beroep vam Kees Klaasen is brandweerman."


function createDetailString (firstName, lastName, profession) {
  const fullName = firstName + " " + lastName;
  return "Het beroep van " + fullName + " is " + profession
}
const feedBack = createDetailString("Gaetan", "Asselberghs", "Programmeur");
console.log(feedBack);