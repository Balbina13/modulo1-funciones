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



     


