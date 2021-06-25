var form = document.getElementById("formulario");
var resultado = document.getElementById("resultado");
var tipo = document.getElementById("tipo");

form.addEventListener("submit",function raiz(previneSub){
    
    let n1 = parseInt(numero1.value);
    let n2 = parseInt(numero2.value);
    let tp = tipo.value;
    

    switch(tp){
        case "+":
            let total = n1+n2;
            resultado.innerHTML = n1 +" "+tp+" "+ n2 +" = "+total;
    }

    switch(tp){
        case "-":
            let total = n1-n2;
            resultado.innerHTML = n1 +" "+tp+" "+ n2 +" = "+total;
    }

    switch(tp){
        case "x":
            let total = n1*n2;
            resultado.innerHTML = n1 +" "+tp+" "+ n2 +" = "+total;
    }

    switch(tp){
        case "/":
            let total = n1/n2;
            resultado.innerHTML = n1 +" "+tp+" "+ n2 +" = "+total.toFixed([2]);
    }


    previneSub.preventDefault();
    
});
