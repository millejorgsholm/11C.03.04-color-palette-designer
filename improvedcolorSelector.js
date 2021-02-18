"use strict";

document.addEventListener("DOMContentLoaded", startColorSelector);

function startColorSelector() {
  console.log("Start function and get color");

  let input = document.querySelector("#choose_color");
  input.addEventListener("input", startColorSelector);
  showColorDelegator(input);
}

function showColorDelegator(input) {
  // Her er delegatoren der deler de forskellige opgaver ud
  console.log("Starting the delegator");
  const hex = input.value;
  console.log(hex);

  const rgb = hexToRgb(hex);
  showRgb(rgb);

  showBoxColor(hex);

  showHex(hex);

  const hsl = rgbToHsl(rgb);
  showHsl(hsl);
}

function hexToRgb(hex) {
  // Udregner rgb koden fra hex i tre dele
  const r = parseInt(hex.substring(1, 3), 16);
  const g = parseInt(hex.substring(3, 5), 16);
  const b = parseInt(hex.substring(5, 7), 16);
  return { r, g, b };
}

function showRgb(rgb) {
  // Viser rgb koden i html
  document.querySelector(
    "#rgb_color"
  ).textContent = `RGB: (${rgb.r}, ${rgb.g}, ${rgb.b})`;
}

function showBoxColor(hex) {
  // Skifter farve på boksen
  document.querySelector("#color_box").style.backgroundColor = `${hex}`;
}

function showHex(hex) {
  // Viser hex kode i html
  document.querySelector("#hex_color").textContent = `HEX: ${hex}`;
}

function rgbToHex(rgb) {
  // Udregner og forkorter tal. Nodtager rgb og leverer hex
  const r = rgb.r.toString(16).padStart(2, "0");
  const g = rgb.g.toString(16).padStart(2, "0");
  const b = rgb.b.toString(16).padStart(2, "0");
  const hex = `#${r}${g}${b}`;
  return hex;
}

function showHsl(hsl) {
  // Viser HSL kode i html og forkorter decimalerne
  document.querySelector("#hsl_color").textContent = `HSL: ${hsl.h.toFixed(
    2
  )}%, ${hsl.s.toFixed(2)}%, ${hsl.l.toFixed(2)}%`;
}

function rgbToHsl(rgb) {
  // Udregner hsl kode fra rgb og leverer h, s og l til funktionen showHsl
  let r = rgb.r;
  let g = rgb.g;
  let b = rgb.b;

  r /= 255;
  g /= 255;
  b /= 255;

  let h, s, l;

  const min = Math.min(r, g, b);
  const max = Math.max(r, g, b);

  if (max === min) {
    h = 0;
  } else if (max === r) {
    h = 60 * (0 + (g - b) / (max - min));
  } else if (max === g) {
    h = 60 * (2 + (b - r) / (max - min));
  } else if (max === b) {
    h = 60 * (4 + (r - g) / (max - min));
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

  return { h, s, l };
}
