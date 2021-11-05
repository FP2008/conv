document.getElementById("li").addEventListener("input",convVol);
document.getElementById("dl").addEventListener("input",convVol);
document.getElementById("cl").addEventListener("input",convVol);
document.getElementById("ml").addEventListener("input",convVol);
document.getElementById("cs").addEventListener("input",convVol);
document.getElementById("cc").addEventListener("input",convVol);

function round(value, step) {
  step || (step = 1.0);
  var inv = 1.0 / step;
  return Math.round(value * inv) / inv;
}

function convVol(e){
  //définir id comme une constante non modifiable
  //e = event de l'input
  const id = e.target.id;
  const valeur = parseFloat(e.target.value);
  if(valeur === NaN)return;
  if(id == "li"){
    li.value = round(valeur, 1.0);
    dl.value = round(valeur * 10, 1.0);
    cl.value = round(valeur * 100, 1.0);
    ml.value = round(valeur * 1000, 1.0);
    cs.value = round(valeur / 0.015, 0.5);
    cc.value = round(valeur / 0.005, 0.5);
  }
  else if(id == "dl"){
    dl.value = round(valeur, 1.0);
    li.value = round(valeur /10, 0.1)
    cl.value = round(valeur * 10, 1.0);
    ml.value = round(valeur * 100, 1.0);
    cs.value = round(valeur / 0.15, 0.5);
    cc.value = round(valeur / 0.05, 0.05);
  }
    else if(id == "cl"){
    cl.value = round(valeur, 1.0);
    li.value = round(valeur /100, 0.01)
    dl.value = round(valeur / 10, 0.1);
    ml.value = round(valeur * 10, 1.0);  
    cs.value = round(valeur / 1.5, 0.5);
    cc.value = round(valeur / 0.5, 0.5);
  }
  if(id == "ml"){
    ml.value = round(valeur, 1.0);
    li.value = round(valeur /1000, 0.001)
    dl.value = round(valeur / 100, 0.01);
    cl.value = round(valeur / 10, 0.1);
    cs.value = round(valeur / 15, 0.5);
    cc.value = round(valeur / 5, 0.5);
  }
  else if(id == "cs"){
    cs.value = round(valeur, 1.0);
    li.value = round(valeur * 0.015, 0.001);
    dl.value = round(valeur * 0.15, 0.01);
    cl.value = round(valeur * 1.5, 0.1);
    ml.value = round(valeur * 15, 1.0);
    cc.value = round(valeur * 3, 0.5);     
  }
  else if(id == "cc"){
    cc.value = round(valeur, 1.0);
    li.value = round(valeur * 0.005, 0.001);
    dl.value = round(valeur * 0.05, 0.01);
    cl.value = round(valeur * 0.5, 0.1);
    ml.value = round(valeur * 5, 1.0);
    cs.value = round(valeur / 3, 0.5);
  }
}
