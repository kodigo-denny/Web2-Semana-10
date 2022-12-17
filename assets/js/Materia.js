const Materia = function(id, nombreMateria, uv){
    this.id = id
    this.nombreMateria = nombreMateria
    this.uv = uv

    this.mostrarDatos = function(){
        console.log("ID: " + this.id)
        console.log("Nombre de la materia: " + this.nombreMateria)
        console.log("UV: " + this.uv)
    }
}