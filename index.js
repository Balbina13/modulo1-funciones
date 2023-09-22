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

const numero1 = Number(prompt("Escriba el primer numero:"))
const numero2 = Number(prompt("Escriba el segundo numero:"))

const disminucion = (numero1, numero2) => {
    const restar = (numero1 - numero2)
    return restar
}

console.log(disminucion(numero1, numero2))

const adicion = (numero1, numero2) =>  {
    const sumar = (numero1 + numero2)
    return sumar
}

console.log(adicion(numero1, numero2))

const division = (numero1, numero2) =>  {
    const dividir = (numero1 / numero2)
    return dividir
}

console.log(division(numero1, numero2))

const producto = (numero1, numero2) =>  {
    const multiplicar = (numero1 * numero2)
    return multiplicar
}

console.log(producto(numero1, numero2))

//Ejercicio 2:
//Crea una funcion que recibe como parametro un sueldo y un numero que representa el porcentaje de aumento. La funcion debe devolver el sueldo mas el aumento.
const sueldo = Number(prompt("Coloca tu sueldo actual:"))
const porcAumento = Number(prompt("Coloca tu porcentaje de aumento por paritaria:")) 

const aumentoDeSueldo = (sueldo, porcAumento) =>    {
    const sueldoNeto = (((sueldo*porcAumento)/100) + sueldo)
    return sueldoNeto
}

console.log((aumentoDeSueldo(sueldo, porcAumento)))

//Ejercicio 3
//Crear una funcion que reciba como parametro un nombre, una edad, una profesion, y un pais y retorne un string con la concatenacion de los datos ingresados. Probar su funcionamiento.
const fullname = prompt("Escribe tu nombre completo:")
const age = prompt("Escribe tu edad:")
const profession = prompt("Escriba tu profesion:")
const country = prompt("Escribe tu pais de residencia:")

const datosUsuario = (fullname, age, profession, country) =>    {
    const datos = (`Hola, mi nombre es ${fullname}, tengo ${age} años de edad. Soy ${profession} y actualemte resido en ${country}`)
    return datos
}

console.log(datosUsuario(fullname, age, profession, country))

typeof datosUsuario

typeof fullname
typeof age
typeof profession
typeof country

//Ejercicio 4
//Crear un ejericio que reciba como parametro un precio y devuelva el precio + el iva.
const precioProducto = Number(prompt("Escriba le precio de su producto:"))

const productoConIva = (precioProducto) =>  {
    const calculoIva = (((precioProducto*21)/100) + precioProducto)
    return calculoIva
}

console.log(productoConIva(precioProducto))

//Ejercicio 5
//a- Como hacer para usar las funciones del ejercicio 1 pero que los numeros los pidamos al usuario?
//Lo coloque en ese mismo ejercicio.
//b- repetir situacion pero para el ejercicio 2 y ejercicio 3
//Ya realizado con anterioridad

//BONUS
//Crear una funcion contador() que cada vez que se ejecute, sume 1 unidad a la variable.

const nroClientes = Number(prompt("Ingrese el numero de personas que ingreso al circo:"))

const ingresoxMinuto = (nroClientes) =>     {
    const personasIn = (nroClientes + 1)
    return personasIn
}     

console.log(ingresoxMinuto(nroClientes))


