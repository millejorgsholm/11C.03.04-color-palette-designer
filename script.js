"use strict";

window.addEventListener("DOMContentLoaded", start);

function start() {
  console.log("DOM loaded - start");

  readInput();
}

// HVORDAN FÅR JEG DEN TIL AT FANGE INSTANT??? Everytime the user changes the color, the webpage must update the display
function readInput() {
  //reading the input and getting the HEX
  console.log("reading input");
  let input = document.querySelector(".colorpicker"); //getting the input
  let colorValue = input.value; //variable colorValue is the value of the input

  document.querySelector(".HEXoutput").textContent = colorValue; //places the colorvalue in the DOM
  console.log(`the HEX is ${colorValue}`);

  calRGB(colorValue); //sending the parameter to function
}

function calRGB(colorValue) {
  console.log("calculation RGB");

  //dividing the hex into 3 part for the rgb - shipping the #
  const r = colorValue.substring(1, 3);
  const g = colorValue.substring(3, 5);
  const b = colorValue.substring(5, 7);

  //make into the numbers for rgb
  const r2 = Number.parseInt(r, 16);
  const g2 = Number.parseInt(g, 16);
  const b2 = Number.parseInt(b, 16);
  const rgbresult = `(${r2},${g2},${b2})`;

  //placing the result in the DOM
  document.querySelector(".RGBoutput").textContent = rgbresult;
  console.log(`rgb koden er (${r2},${b2},${g2})`);

  calHSL(r2, g2, b2);
}

function calHSL(r2, g2, b2) {
  //converting rgb to hsl
  console.log("calculation HSL");

  r2 /= 255;
  g2 /= 255;
  b2 /= 255;

  let h, s, l;

  const min = Math.min(r2, g2, b2);
  const max = Math.max(r2, g2, b2);

  if (max === min) {
    h = 0;
  } else if (max === r2) {
    h = 60 * (0 + (g2 - b2) / (max - min));
  } else if (max === g2) {
    h = 60 * (2 + (b2 - r2) / (max - min));
  } else if (max === b2) {
    h = 60 * (4 + (r2 - g2) / (max - min));
  }

  if (h < 0) {
    h = h + 360;
  }

  l = (min + max) / 2;

  if (max === 0 || min === 1) {
    s = 0;
  } else {
    s = (max - l) / Math.min(l, 1 - l);
  }
  // multiply s and l by 100 to get the value in percent, rather than [0,1]
  s *= 100;
  l *= 100;

  document.querySelector(".HSLoutput").textContent = `${h}, ${s}, ${l}`;
  console.log("hsl(%f,%f%,%f%)", h, s, l); // just for testing
  //SPG: HVORDAN FORKORTER JEG KOMME TALLENE???
}
