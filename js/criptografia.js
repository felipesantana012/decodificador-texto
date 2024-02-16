







function cripitografia (){

let a ="atle", e="enter", i="imes", o="ober", u="ufat";

let entrada = document.getElementById('entrada').value;
let resultado = entrada.
replace(/a/g, a).
replace(/e/g, e).
replace(/i/g, i).
replace(/o/g, o).
replace(/u/g, u);
document.getElementById('saida').value= resultado;

entrada.reset();

}


function descriptografar(){

let atle="a", enter="e", imes="i", ober="o", ufat="u";
let entrada = document.getElementById('entrada').value;
let resultado = entrada.
replace(/atle/g, atle).
replace(/enter/g, enter).
replace(/imes/g, imes).
replace(/ober/g, ober).
replace(/ufat/g, ufat);;
document.getElementById('saida').value= resultado;
}



