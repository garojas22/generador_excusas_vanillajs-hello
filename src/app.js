/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onclick = function generador() {
  let quien = [
    "bruno",
    "jose david",
    "fuad",
    "jorge",
    "cesar",
    "parce",
    "alicia",
    "valentina",
    "carmen",
    "nataly",
    "angel",
    "pedro",
    "leo",
    "irene"
  ];

  let queHizo = ["escondio", "robo", "destrozo", "vendio", "daño", "oculto"];
  let evitar = [
    "mi proyecto",
    "la laptop",
    "el carro",
    "el play ",
    "mi telefono",
    "el tv"
  ];
  let cuando = [
    "ayer",
    "el lunes",
    "el martes",
    "el miercoles",
    "el jueves",
    "el viernes",
    "el sabado",
    "el domingo",
    "hace 5 minutos",
    "hace 10 minutos",
    "hace 20 minutos",
    "hace 15 minutos",
    "hace 30 minutos",
    "hace 40 minutos",
    "hace 50 minutos",
    "hace media hora",
    "hace 1 hora",
    "hace 2 horas",
    "hace 3 horas",
    "hace un rato",
    "hace 2 dias",
    "hace 3 dias",
    "hace 4 dias",
    "hace 5 dias",
    "hace 1 semana",
    "hace 2 semanas"
  ];
  let random_quien = Math.floor(Math.random() * quien.length);
  let random_queHizo = Math.floor(Math.random() * queHizo.length);
  let random_evitar = Math.floor(Math.random() * evitar.length);
  let random_cuando = Math.floor(Math.random() * cuando.length);
  document.getElementById("result").innerHTML =
    "<div class=' alert text-bg-success h-50'><h6 id='xd'>" +
    quien[random_quien] +
    " " +
    queHizo[random_queHizo] +
    " " +
    evitar[random_evitar] +
    " " +
    cuando[random_cuando] +
    "</h6></div>";
};
