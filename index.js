//EJERCITACION FUNCIONES:
//Ejercicio 0:
//Crear una funcion que reciba como parametro un nombre y muestre por consola un saludo a esa persona.
const nombre = prompt("Ingrese su nombre:")

const welcome = (nombre) => {
  console.log(`Saludos, bienvenido/a ${nombre}`)
}  

console.log(welcome(nombre))

//Ejercicio 1:
//Crear una funcion que reciba como parámetro dos numeros y devuelva el resultado de cada calculo aritmético:
const disminucion = (numero1, numero2) => {
    const restar = (numero1 - numero2)
    return restar
}

const adicion = (numero1, numero2) =>  {
    const sumar = (numero1 + numero2)
    return sumar
}
const division = (numero1, numero2) =>  {
    const dividir = (numero1 / numero2)
    return dividir
}
const producto = (numero1, numero2) =>  {
    const multiplicar = (numero1 * numero2)
    return multiplicar
}

//Ejercicio 2:
//Crea una funcion que recibe como parametro un sueldo y un numero que representa el porcentaje de aumento. La funcion debe devolver el sueldo mas el aumento.
const sueldo = Number(prompt("Coloca tu sueldo actual:"))
const porcAumento = Number(prompt("Coloca tu porcentaje de aumento por paritaria:")) 

const aumentoDeSueldo = (sueldo, porcAumento) =>    {
    const sueldoNeto = (((sueldo*porcAumento)/100) + sueldo)
    return sueldoNeto
}

console.log((aumentoDeSueldo(sueldo, porcAumento)))
     


