document.getElementById("ml").addEventListener("input",convPoids);
document.getElementById("cc").addEventListener("input",convPoids);
document.getElementById("cs").addEventListener("input",convPoids);

function convPoids(e){
  //définir id comme une constante non modifiable
  //e = event de l'input
  const id = e.target.id;
  const valeur = parseFloat(e.target.value);
  //console.log affiche les valeurs dans la console pour le débogage
  console.log(valeur);
    if(id == "ml"){
      cc.value = Math.round(valeur /5 * 2) / 2;
      cs.value = Math.round(valeur /15 * 2) / 2;
    }
    else if(id == "cc"){
        ml.value = valeur * 5;
        cs.value = Math.round(valeur / 3 *2) /2;
    }
    else if(id == "cs"){
        ml.value = valeur * 15;
        cc.value = valeur * 3;       
    }
}
