var a= prompt("Ingresa un primer número");
var a= parseInt(a);
var b= prompt("Ingresa un segundo número");
var b= parseInt(b);
var c= prompt("Ingresa un tercer número");
var c= parseInt(c);

    if (a>b && a>c){
        alert("El primer número es el mayor");
    }
    else if (b>a && b>c){
        alert("El segundo número es el mayor");
    }
    else if (c>a && c>b){
        alert("El tercer número es el mayor");
    }
    else{
        alert("Error, ingresaste algo mal");
    }