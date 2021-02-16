"use strict";

window.addEventListener("DOMContentLoaded", getValue);

//Getting a selected color from the user
function getValue() {
  colorSelector.addEventListener("input", function (event) {
    let hexValue = colorTheBox(event);
    console.log(hexValue);
    showHEX(hexValue);
    let rgb = hexToRGB(hexValue);
    console.log(rgb);
    showRGB(rgb);
    let css = rgbToCSS(rgb);
    showCSS(css);
    let hsl = rgbToHSL(rgb);
    showHSL(hsl);
  });
}
//Showing the selected color as a colored box in CSS
function colorTheBox(event) {
  document.querySelector(".colorBox").style.backgroundColor =
    event.target.value;

  let hexValue = event.target.value;
  return hexValue;
}

//Showing hex
function showHEX(hexValue) {
  Number.parseInt(hexValue);
  document.querySelector(".hex").textContent = `HEX: ${hexValue}`;
}

//Showing rgb
function showRGB(rgb) {
  document.querySelector(
    ".rgb"
  ).textContent = `RGB: ${rgb.r}, ${rgb.g}, ${rgb.b}`;
}

//Showing hsl
function showHSL(hsl) {
  document.querySelector(".hsl").textContent = hsl;
}

//Showing css
function showCSS(css) {
  document.querySelector(".cssBox").style.backgroundColor = css;
  console.log(css);
}
//Converting hex to rgb
function hexToRGB(hexValue) {
  const rgb = { r: "", g: "", b: "" };
  rgb.r = Number.parseInt(hexValue.substring(1, 3), 16);
  rgb.g = Number.parseInt(hexValue.substring(3, 5), 16);
  rgb.b = Number.parseInt(hexValue.substring(5, 7), 16);
  return rgb;
}

//Converting rgb to css
function rgbToCSS(rgb) {
  rgb.r.toString();
  rgb.g.toString();
  rgb.b.toString();

  let cssResult = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
  //   console.log(cssResult);
  return cssResult;
}
//Converting rbg to hsl --> code was given by teachers
function rgbToHSL(rgb) {
  rgb.r /= 255;
  rgb.g /= 255;
  rgb.b /= 255;
  let h, s, l;

  const min = Math.min(rgb.r, rgb.g, rgb.b);
  const max = Math.max(rgb.r, rgb.g, rgb.b);

  if (max === min) {
    h = 0;
  } else if (max === rgb.r) {
    h = 60 * (0 + (rgb.g - rgb.b) / (max - min));
  } else if (max === rgb.g) {
    h = 60 * (2 + (rgb.b - rgb.r) / (max - min));
  } else if (max === rgb.b) {
    h = 60 * (4 + (rgb.r - rgb.g) / (max - min));
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
  //Multiplying s and l by 100 to get the value in percent, rather than [0,1]
  s *= 100;
  l *= 100;

  //Console.log("hsl(%f,%f%,%f%)", h, s, l); // just for testing
  //Testing
  let HSLResult = `HSL: ${h.toFixed(0)}, ${s.toFixed(0)}%, ${l.toFixed(0)}%`;
  return HSLResult;
}
