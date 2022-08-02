let ArrayAlumnos = []


class Alumno {
constructor (){
  this.id = prompt("Ingresa el numero de id");
  this.nombre = prompt("Ingresa el nombre del estudiante");
  this.periodos = prompt("Ingresa el numero de periodos");
  this.notas = [];
  this.resultadoFinal = []
}


agregarNotas(){
  for(let i = 1; i <= this.periodos;i++){
    
    let ingresarNotas = parseFloat(prompt("Ingrese las notas del periodo:"));
    this.notas.push(ingresarNotas);
    console.log(ingresarNotas);
    }
  }
promediarNotas(){
  const resultado = (this.notas.reduce((iteracion,acumulador) => iteracion + acumulador, 0))/this.periodos;
  alert("Su resultado final es: " + resultado.toFixed(1));
  this.resultadoFinal.push(resultado);
  }
mostrarDatos(){
  alert(("Id: " + this.id + "\nNombre: "+ this.nombre)+ "\nResultado final: " + this.resultadoFinal);
  ArrayAlumnos.push(cadaAlumno);
  console.log(ArrayAlumnos);
  }

}
const cadaAlumno = new Alumno();

cadaAlumno.agregarNotas();
cadaAlumno.promediarNotas();
cadaAlumno.mostrarDatos();
console.log(cadaAlumno);
alert(ArrayAlumnos);

function buscarProducto(id){
    return ArrayAlumnos.find((elemento)=>elemento.id == id)
}
buscarProducto();

console.log(buscarAlumno);
/* function nuevoUsuario(){
  let usuario = prompt("¿Desea ingresar un nuevo usuario? Ingrese sí, o ESC para salir".toUpperCase);
  while(usuario=="SI"){
    // AGREGAR DENTRO DE CADA FUNCION, AL FINAL: 
  cadaAlumno.agregarNotas(); // usuario = prompt("Desea continuar? Ingrese sí, o ESC para salir".toUpperCase);
  cadaAlumno.promediarNotas();// usuario = prompt("Desea continuar? Ingrese sí, o ESC para salir".toUpperCase);
  cadaAlumno.mostrarDatos();// usuario = prompt("Desea continuar? Ingrese sí, o ESC para salir".toUpperCase);
  console.log(cadaAlumno);// usuario = prompt("Desea continuar? Ingrese sí, o ESC para salir".toUpperCase);
  alert(ArrayAlumnos);// usuario = prompt("Desea continuar? Ingrese sí, o ESC para salir".toUpperCase);
  
  } 
}
 */
 




