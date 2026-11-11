const cmimiLibra = 12.50;
const sasiaLibra = 3;

const cmimiFletore = 1.80;
const sasiaFletore = 4;

let kostoLibra = cmimiLibra * sasiaLibra;
let kostoFletore = cmimiFletore * sasiaFletore;

let shumaTotale = kostoLibra + kostoFletore;
shumaTotale += 2.50;
console.log("Kosto e librave:", kostoLibra);
console.log("Kosto e fletoreve:", kostoFletore);
console.log("Fatura totale (përfshirë transportin):", shumaTotale);





let aktiviteti = 18;
let projekti = 24;
let provimi = 43;

let totaliPikeve = aktiviteti + projekti + provimi;
let perqindja = (totaliPikeve / 100) * 100; 

console.log("Totali fillestar:", totaliPikeve);
console.log("Përqindja e arritur:", perqindja + "%");


provimi = 48;
let totaliRij = aktiviteti + projekti + provimi;
let perqindjaRe = totaliRij;

console.log("--- Pas korrigjimit të provimit ---");
console.log("Totali i ri:", totaliRij);
console.log("Përqindja e re:", perqindjaRe + "%");






