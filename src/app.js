/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

function generateExcuse() {
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  let randomWhoIndex = Math.floor(Math.random() * who.length);
  let randomActionIndex = Math.floor(Math.random() * action.length);
  let randomWhatIndex = Math.floor(Math.random() * what.length);
  let randomWhenIndex = Math.floor(Math.random() * when.length);

  let excuse = `${who[randomWhoIndex]} ${action[randomActionIndex]} ${what[randomWhatIndex]} ${when[randomWhenIndex]}.`;

  return excuse;
}

// Generar una excusa al cargar la página
window.onload = function() {
  let randomExcuse = generateExcuse();
  document.getElementById("excuse").innerHTML = randomExcuse;
};
