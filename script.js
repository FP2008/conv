/* f. poirrier */
document.getElementById("li").addEventListener("input",findInp);
document.getElementById("dl").addEventListener("input",findInp);
document.getElementById("cl").addEventListener("input",findInp);
document.getElementById("ml").addEventListener("input",findInp);
document.getElementById("cs").addEventListener("input",findInp);
document.getElementById("cc").addEventListener("input",findInp);
document.getElementById("raz").addEventListener("click",findInp);

var id;
var valeur;

function round(value, step) {
  step || (step = 1.0);
  var inv = 1.0 / step;
  return Math.round(value * inv) / inv;
}

function fractionToDecimal(f) {
  return f.split('/').reduce((n, d, i) => n / (i ? d : 1));
}

function testValue(value) {
  if (value == "."){
    value = parseFloat(value);
  } else if ((isNaN(value) == true) || (value == Infinity)){
    id = "raz";
  }
}


function findInp(e){
  //e = event de l'input  
  id = e.target.id;
    
  if(id == "li"){
    valeur = fractionToDecimal(e.target.value);
    } else {
        valeur = parseFloat(e.target.value);
      }
  
  testValue(valeur);
       
  if(id == "li"){
    //li.value = round(valeur, 0.01);
    dl.value = round(valeur * 10, 0.01);
    cl.value = round(valeur * 100, 0.1);
    ml.value = round(valeur * 1000, 1.0);
    cs.value = round(valeur / 0.015, 0.1);
    cc.value = round(valeur / 0.005, 0.1);
  }
  
  if(id == "dl") {
    //dl.value = round(valeur, 1.0);
    li.value = round(valeur /10, 0.1);
    cl.value = round(valeur * 10, 1.0);
    ml.value = round(valeur * 100, 1.0);
    cs.value = round(valeur / 0.15, 0.1);
    cc.value = round(valeur / 0.05, 0.1);
  }
  
  if(id == "cl"){
    //cl.value = round(valeur, 1.0);
    li.value = round(valeur /100, 0.01)
    dl.value = round(valeur / 10, 0.1);
    ml.value = round(valeur * 10, 1.0);  
    cs.value = round(valeur / 1.5, 0.1);
    cc.value = round(valeur / 0.5, 0.1);
  }
  
  if(id == "ml"){
    //ml.value = round(valeur, 1.0);
    li.value = round(valeur /1000, 0.001)
    dl.value = round(valeur / 100, 0.01);
    cl.value = round(valeur / 10, 0.1);
    cs.value = round(valeur / 15, 0.1);
    cc.value = round(valeur / 5, 0.1);
  }
  
  if(id == "cs"){
    //cs.value = round(valeur, 1.0);
    li.value = round(valeur * 0.015, 0.001);
    dl.value = round(valeur * 0.15, 0.01);
    cl.value = round(valeur * 1.5, 0.1);
    ml.value = round(valeur * 15, 1.0);
    cc.value = round(valeur * 3, 0.1);     
  }
  
  if(id == "cc"){
    //cc.value = round(valeur, 1.0);
    li.value = round(valeur * 0.005, 0.001);
    dl.value = round(valeur * 0.05, 0.01);
    cl.value = round(valeur * 0.5, 0.1);
    ml.value = round(valeur * 5, 1.0);
    cs.value = round(valeur / 3, 0.1);
  }
  
  if(id == "raz") {
    document.getElementById("myForm").reset();
  }
}
