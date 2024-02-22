// Skrypt do zliczania odwiedzin
let counter = 0;
const counterElement = document.getElementById('counter');
function incrementCounter() {
    counter++;
    counterElement.textContent = counter;
}
// Inkrementuj licznik przy każdym odświeżeniu strony
window.onload = incrementCounter;
