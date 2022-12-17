class Carrera{
    id
    nombre
    notaMin
    activo

    static lista = []

    constructor(id, nombre, notaMin, activo){
        this.id = id
        this.nombre = nombre
        this.notaMin = notaMin
        this.activo = activo
    }

    get getNotaMin(){
        return this.notaMin
    }

    set setNotaMin(nota){
        if(nota>=0 && nota<=10)
            this.notaMin = nota
    }

    mostrarDatos(){
        console.log("ID: " + this.id)
        console.log("Nombre: " + this.nombre)
        console.log("Nota minima: " + this.notaMin)
        console.log("Activo: " + this.activo)
    }

    static funcionEstatica(){
        console.log("Soy una funciona estatica")
    }

    static cargarCarreras(listaUL){

        let html = ""
        for(let i = 0; i < this.lista.length; i++){
            html += `<li>${this.lista[i].nombre}</li>`
        }

        listaUL.innerHTML = html
        
    }
}