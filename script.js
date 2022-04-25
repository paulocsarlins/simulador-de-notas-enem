function cursonotas(){

    let select = document.getElementById("cursoNotas");
    let nota = select.options[select.selectedIndex].value;

    let notaMin = nota.split(";")[0]
    let notaMax = nota.split(";")[1]
    let pesoRedacao = nota.split(";")[2]
    let pesoMatematica = nota.split(";")[3]
    let pesoLinguagens = nota.split(";")[4]
    let pesoHumanas = nota.split(";")[5]
    let pesoNatureza = nota.split(";")[6]

    let msg1 = document.getElementById("notaMin");
    let msg2 = document.getElementById("notaMax");
    let msg3 = document.getElementById("pesoRedacao");
    let msg4 = document.getElementById("pesoMatematica");
    let msg5 = document.getElementById("pesoLinguagens");
    let msg6 = document.getElementById("pesoHumanas");
    let msg7 = document.getElementById("pesoNatureza");
    
    msg1.innerHTML = `${notaMin}`
    msg2.innerHTML = `${notaMax}`
    msg3.innerHTML = `${pesoRedacao}`
    msg4.innerHTML = `${pesoMatematica}`
    msg5.innerHTML = `${pesoLinguagens}`
    msg6.innerHTML = `${pesoHumanas}`
    msg7.innerHTML = `${pesoNatureza}`

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
