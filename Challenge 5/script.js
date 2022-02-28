let note1 = 275;
let note2 = 40;
let note3 = 430;


if ((note1 >= 50 || note1 <= 300)) {
    let pourcentage1 = 15 * note1 / 100;
    console.log('le pourboire de la première note est de ' + pourcentage1 + ' et la valeur totale était de ' + (pourcentage1 + note1));
} else {
    let pourcentage1 = 20 * note1 / 100;
    console.log('Le pourboire de la première note est de ' + pourcentage1 + ' et la valeur totale était de ' + (pourcentage1 + note1))
}
if ((note2 < 50 || note2 > 300)) {
    let pourcentage2 = 20 * note2 / 100;
    console.log('le pourboire de la deuxième note est de ' + pourcentage2 + ' et la valeur totale était de ' + (pourcentage2 + note2));
} else {
    let pourcentage2 = 15 * note2 / 100;
    console.log('le pourboire de la deuxième note est de ' + pourcentage2 + ' et la valeur totale était de ' + (pourcentage2 + note2));
}
if ((note3 < 50 || note3 > 300)) {
    let pourcentage3 = 20 * note3 / 100;
    console.log('le pourboire de la troisième note est de ' + pourcentage3 + ' et la valeur totale était de ' + (pourcentage3 + note3));
} else {
    let pourcentage3 = 15 * note3 / 100;
    console.log('le pourboire de la troisième note est de ' + pourcentage3 + ' et la valeur totale était de ' + (pourcentage3 + note3))
}