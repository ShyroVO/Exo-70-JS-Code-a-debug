let text = document.getElementById('main');

text.innerHTML="test <br>";

let boucle = 0;
while (boucle < 5) {
    boucle++
    text.innerHTML+= boucle + "<br>";
}

document.getElementById('divInconnuAuBataillon').innerHTML = "ttttttttttttttttt";

let variableInconnueAuBataillon = 0;

if (variableInconnueAuBataillon === 1) {
    alert('connue');
}
else {
    alert("inconnue");
}

alert("Penser à ne pas oublier...");

alert ("certaines choses");
