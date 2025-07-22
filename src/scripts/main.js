// Imports go first
import { makePottery } from "./PotteryWheel.js";
import { firePottery } from "./Kiln.js";
import { toSellOrNotToSell } from "./PotteryCatalog.js";

// Make 5 pieces of pottery at the wheel
let mug = makePottery("Mug", 4, 3);
let saucer = makePottery("Saucer", 5, 1);
let teaCup = makePottery("Tea Cup", 2, 2);
let teaPot = makePottery("Tea Pot", 8, 6);
let vase = makePottery("Vase", 10, 12);

// Fire each piece of pottery in the kiln

let firedMug = firePottery(mug, 2200);
let firedSaucer = firePottery(saucer, 2201);
let firedTeaCup = firePottery(teaCup, 1800);
let firedTeaPot = firePottery(teaPot, 2400);
let firedVase = firePottery(vase, 2000);

// Determine which ones should be sold, and their price

let sellMug = toSellOrNotToSell(firedMug);
let sellSaucer = toSellOrNotToSell(firedSaucer);
let sellTeaCup = toSellOrNotToSell(firedTeaCup);
let sellTeaPot = toSellOrNotToSell(firedTeaPot);
let sellVase = toSellOrNotToSell(firedVase);

// Invoke the component function that renders the HTML list

// console.log(mug);
// console.log(saucer);
// console.log(teaCup);
// console.log(teaPot);
// console.log(vase);

// console.log(firedMug);
// console.log(firedSaucer);
// console.log(firedTeaCup);
// console.log(firedTeaPot);
// console.log(firedVase);

console.log(sellMug);
console.log(sellSaucer);
console.log(sellTeaCup);
console.log(sellTeaPot);
console.log(sellVase);
