"use strict";

document.addEventListener("DOMContentLoaded", startColorSelector);

function startColorSelector() {
  console.log("Start function");

  document
    .querySelector("#choose_color")
    .addEventListener("input", getColorInput);

  getColorInput();
}

function getColorInput() {
  console.log("Read color input and put into hex");

  let colorValue = document.querySelector("#choose_color").value;

  const hex = document.querySelector("#hex_color");
  hex.textContent = "Hex: " + colorValue;

  console.log("HEX: " + colorValue);

  showColor(colorValue);
  hexToRgb(colorValue);
}

function showColor(colorValue) {
  document.querySelector("#color_box").style.backgroundColor = colorValue;
}

function hexToRgb(colorValue) {
  console.log("Convert Hex to Rgb and put into rgb");

  // Splitter den seks cifrede hex kode op i tre værdier:
  const r = colorValue.substring(1, 3);
  const g = colorValue.substring(3, 5);
  const b = colorValue.substring(5, 7);

  // Udregning af værdier til rgb
  const r2 = Number.parseInt(r, 16);
  const g2 = Number.parseInt(g, 16);
  const b2 = Number.parseInt(b, 16);
  const rgbResult = `(${r2}, ${g2}, ${b2})`;

  console.log("RGB: " + rgbResult);

  // Sætter RGB farven ind i output
  const rgb = document.querySelector("#rgb_color");
  rgb.textContent = "RGB: " + rgbResult;

  rgbToHsl(r2, g2, b2);
}

function rgbToHsl(r2, g2, b2) {
  console.log("Convert rgb to hsl and put into hsl");

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

  // Lav HSL til maks tre cifre
  h = +h.toFixed(2);
  s = +s.toFixed(2);
  l = +l.toFixed(2);

  console.log("hsl(%f,%f%,%f%)", h, s, l);

  // Sætter HSL farven ind i output
  const hsl = document.querySelector("#hsl_color");
  hsl.textContent = "HSL: " + h + " " + s + "%" + " " + l + "%";
}
