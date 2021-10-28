let ml = document.getElementById("ml");
let cc = document.getElementById("cc");
let cs = document.getElementById("cs");

ml.addEventListener("input", function(){convPoids(this.id, this.value);});
cc.addEventListener("input", function(){convPoids(this.id, this.value);});
cs.addEventListener("input", function(){convPoids(this.id, this.value);});

function convPoids(id, valeur){
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