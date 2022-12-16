var denny = new Estudiante(1, "Denny", "Herrera", "Sistemas")
        denny.mostrarDatos()
        /*console.log(denny.id)
        console.log(denny.nombre)
        console.log(denny.apellido)
        console.log(denny.carrera)*/
        
        denny.carrera = "ingles"
        console.log("Despues del cambio")
        denny.mostrarDatos()
        //console.log(denny.carrera)

        console.log("nuevo objeto")
        let estudiante2 = new Estudiante(2, "Alexis", "Marin", "Sistemas")
        estudiante2.mostrarDatos()
        /*console.log(estudiante2.id)
        console.log(estudiante2.nombre)
        console.log(estudiante2.apellido)
        console.log(estudiante2.carrera)
        */

        console.log("objeto anterior")
        //console.log(denny.nombre)
        //denny.carrera = "Sistemas"
        denny.mostrarDatos()

        console.log()
        console.log("Cuotas de alumnos")
        console.log(denny.calcularCuota())
        console.log(estudiante2.calcularCuota())


        denny = new Estudiante(3, "Nombre", "Apellido")
        denny.mostrarDatos()
