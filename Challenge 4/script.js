let dauphins1 = 96 + 108 + 89;
let koalas1 = 88 + 91 + 110;

let dauphins2 = 97 + 112 + 101;
let koalas2 = 109 + 95 + 123;

let dauphins3 = 97 + 112 + 101;
let koalas3 = 109 + 95 + 106;

let dauphinsMoyenne = dauphins1 + dauphins2 + dauphins3 / 3;
let koalasMoyenne = koalas1 + koalas2 + koalas3 / 3;
const matchGagner = 100;

if (dauphinsMoyenne > koalasMoyenne && (dauphinsMoyenne = matchGagner)) {
    console.log('Les dauphins ont gagnés');
} else if (dauphinsMoyenne == koalasMoyenne && ((dauphinsMoyenne = matchGagner) || (koalasMoyenne = matchGagner))) {
    console.log('Match Null');
} else if (koalasMoyenne = matchGagner && (koalasMoyenne > dauphinsMoyenne)) {
    console.log('Les koalas ont gagnés');
} else {
    console.log('Personne n\'a gagné :( ');
}