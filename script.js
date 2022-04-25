function cursonotas(){

    let select = document.getElementById("cursoNotas");
    let valor = select.options[select.selectedIndex].value;
    console.log(valor);
}

function notahumanas(){
    
    let select = document.getElementById("notashumanas");
    let valor = select.options[select.selectedIndex].value;
    console.log(valor);

    let msg = document.getElementById("notahumanas");
    msg.innerHTML = `${valor}`
   
}

function notanatureza(){
    
    let select = document.getElementById("notasnatureza");
    let valor = select.options[select.selectedIndex].value;
    console.log(valor);

    let msg = document.getElementById("notanatureza");
    msg.innerHTML = `${valor}`
   
}

function notalinguagens(){
    
    let select = document.getElementById("notaslinguagens");
    let valor = select.options[select.selectedIndex].value;
    console.log(valor);

    let msg = document.getElementById("notalinguagens");
    msg.innerHTML = `${valor}`
   
}

function notamatematica(){
    
    let select = document.getElementById("notasmatematica");
    let valor = select.options[select.selectedIndex].value;
    console.log(valor);

    let msg = document.getElementById("notamatematica");
    msg.innerHTML = `${valor}`
   
}
