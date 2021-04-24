console.log(document.title);
let infcard= document.querySelector('.infocard');

//======Bichomón======

//1. Cambia el título "Generation 1 Pokémon" por "Generasión 1 Pokimon".
 document.getElementById("gen-1").innerHTML = "Generasión 1 Pokimon";

//2. Cambia el color de fondo de la primera generación de Pokimon.
let primerElmento = document.querySelector(".infocard-list.infocard-list-pkmn-lg");
primerElmento.setAttribute("style","background-color:powderblue");


//3. Imprime por consola la URL de la página.
console.log(document.URL);

//4. Imprime por consola el dominio de la página.
console.log(document.domain);

//5. Imprime todos los nodos de imagen.
console.log(document.images);

//6. Sustituye el atributo "src" de todas las imágenes por este "https://media.giphy.com/media/2v170e71aanfi/giphy.gif"
//let imgSA = 
let collImg = document.getElementsByTagName("img");
for(i=0;i<collImg.length;i++){
    collImg[i].src = "https://media.giphy.com/media/2v170e71aanfi/giphy.gif";
}

//Premium:
//7. Cambia el fondo de todos los infocard-lg-data text-muted para todos los Pokimon voladores itype flying

//let allInfcardTM = document.querySelectorAll(".infocard-lg-data.text-muted");
let allInfcardTM = document.querySelectorAll('.infocard');

//let flying = allInfcardTM.getElementsByClassName('.itype.flying');
for(i=0;i < allInfcardTM.length; i++){
/*     if (allInfcardTM[i].textContent.match('Flying')){
        //console.log(allInfcardTM[i].textContent.match('Flying'));
        allInfcardTM[i].setAttribute('style','background-color:yellow');
    } */
    //console.log(allInfcardTM[i].querySelectorAll('.itype.flying'));

    if (allInfcardTM[i].querySelectorAll('.itype.flying').length != 0){
        //console.log(allInfcardTM[i].textContent.match('Flying'));
       allInfcardTM[i].setAttribute('style','background-color:yellow');
    }
} 