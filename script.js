"use strict";

// selecting
const input = document.querySelectorAll("input");
const convertBtn = document.getElementById("convertBtn");
const binaryInput = document.getElementById("binaryInput");

// bin to dec

convertBtn.addEventListener("click", () => {
  // document.getElementById("binaryInput").value
  binaryInput.value = binaryInput.value.padStart(8, "0");
  const binary = [...binaryInput.value];
  console.log(binary);
  const binarypos = [];
  for (let i = 0; i < binary.length; i++) {
    binarypos[binary.length - 1 - i] = Math.pow(binary[i] * 2, [i]);
  }
  console.log(binarypos);
});

// only 1's and 0's in binary field
binaryInput.addEventListener("input", (e) => {
  e.target.value = e.target.value.replace(/[^0-1]/g, "").trim();
});
