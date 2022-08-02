/* let notap1;
let notap2;
let notap3;
let id;
let nombre;

const ArrayNotas = []


function ingresarId(){
  id = prompt("Ingrese el numero de id");

}
function ingresarNombre(){
  nombre = prompt("Ingrese el nombre del estudiante");
 

} 
function ingresarNotas(){
  notap1 = parseFloat(prompt("Ingrese las notas del primer periodo"));
  
  notap2 = parseFloat(prompt("Ingrese las notas del segundo periodo"));
  
  notap3 = parseFloat(prompt("Ingrese las notas del tercer periodo")); 
}

function validar(){
  while(notap1>10){
    alert("Su nota debe ser menor a 10.0")
    notap1 = parseFloat(prompt("Ingrese las notas del primer periodo"));
    
  }
  while(notap2>10){ 
    alert("Su nota debe ser menor a 10.0")
    notap1 = parseFloat(prompt("Ingrese las notas del segundo periodo"));
    
  }
  while(notap3>10){
    alert("Su nota debe ser menor a 10.0")
    notap1 = parseFloat(prompt("Ingrese las notas del tercer periodo"));
    
  }
  ArrayNotas.push(notap1);
  ArrayNotas.push(notap2);
  ArrayNotas.push(notap3);
  console.log(ArrayNotas);
 

}

ingresarId();
ingresarNombre();
ingresarNotas();
validar();
  
const resultado = (ArrayNotas.reduce((iteracion,acumulador) => iteracion + acumulador, 0))/3;
alert("Su resultado final es: " + resultado.toFixed(1));

if (resultado>6){
  alert("El estudiante pasó satisfactoriamente el año cursado :) ");
} else{
  alert("El estudiante es un vago y debe repetir el año");
} 
 */

 


















