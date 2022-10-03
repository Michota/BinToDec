"use strict";

// selecting
const input = document.querySelectorAll("input");
const convertBtn = document.getElementById("convertBtn");
const binaryInput = document.getElementById("binaryInput");
const decimalOutput = document.getElementById("decimalOutput");

// bin to dec

convertBtn.addEventListener("click", () => {
  // document.getElementById("binaryInput").value
  decimalOutput.value = parseInt(Number(binaryInput.value), 2);
  // binaryInput.value = binaryInput.value.padStart(binaryInput.length, 0);
  // const binary = [...binaryInput.value];
  // const binarypos = Array(binary.length).fill(0);
  // console.log(binary);
  // //
  // for (let i = 0; i < binary.length; i++) {
  //   binarypos[binary.length - 1 - i] = Number(binary[i]);
  //   binarypos[i] = Math.pow(binarypos[i] * 2, [i]); // calc 1 - 128 based on
  // }
  // console.log(binarypos);
});

// only 1's and 0's in binary field
binaryInput.addEventListener("input", (e) => {
  e.target.value = e.target.value.replace(/[^0-1]/g, "").trim();
});

// convertBtn.addEventListener("click", () => {
//   // document.getElementById("binaryInput").value
//   binaryInput.value = binaryInput.value.padStart(8, 0);
//   const binary = [...binaryInput.value];
//   const binarypos = Array(binary.length).fill(0);
//   console.log(binary);
//   //
//   for (let i = 0; i < binary.length; i++) {
//     binary[i] = Number(binary[i]);
//     if (binary[i] !== 0) {
//       binarypos[binarypos.length - i] = Math.pow(binary[i] * 2, [i]);
//     }
//   }
//   console.log(binarypos);
// });
