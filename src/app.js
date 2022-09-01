/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function(number) {
  //write your code here

  let simbolo = ["J", "Q", "K", "A", 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let random = Math.floor(Math.random() * (simbolo.length - 1));
  document.querySelector("#numero").append(simbolo[random]);

  let iconos = ["♦", "♥", "♠", "♣"];
  let randomIconos = Math.floor(Math.random() * (iconos.length - 1));
  document.querySelector("#palo").append(iconos[randomIconos]);
  document.querySelector("#palo2").append(iconos[randomIconos]);
  if (iconos[randomIconos] === "♦" || iconos[randomIconos] === "♥") {
    document.querySelector("#palo").style.color = "red";
    document.querySelector("#palo2").style.color = "red";
  }
};
