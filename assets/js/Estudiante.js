class Estudiante{
    id
    nombre
    apellido
    carrera
    telefono

    constructor(id, nombre, apellido, carrera){
        this.id = id
        this.nombre = nombre
        this.apellido = apellido
        this.carrera = carrera == undefined ? "No tiene carrera" : carrera
    }

    mostrarDatos(){
        console.log("Id: " + this.id)
        console.log("Nombre: " + this.nombre)
        console.log("Apellido: " + this.apellido)
        console.log("Carrera: " + this.carrera)
        console.log("Cuota: " + this.calcularCuota())
    }

    calcularCuota(){
        if(this.carrera == "Sistemas")
            return 90
        else if(this.carrera == "ingles")
            return 80
    }
}