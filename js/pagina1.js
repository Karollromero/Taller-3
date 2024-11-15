function guardarEstudiantes() {

    var id = document.getElementById("id")
    var nombre = document.getElementById("nombre")
    var fecha_nacimiento = document.getElementById("fecha_nacimiento")
    var email = document.getElementById("email")
    var telefono = document.getElementById('telefono')

    estudiantes = new estudiante(id.value,nombre.value,
        fecha_nacimiento.value,email.value,telefono.value)

    var estudiantes  = JSON.parse(
        localStorage.getItem("estudiantes") || "[]")  

    estudiantes.push(estudiantes)

    localStorage.setItem("estudiantes", JSON.stringify(estudiantes))    

    id.value = ''
    nombre.value = ''
    fecha_nacimiento.value = ''
    email.value = ''
    telefono.value = ''
    id.focus()
    
    alert("Estudiante guardado exitosamente")
    

    console.log(estudiantes)



}

function actualizarEstudiantes() {

    var id = document.getElementById("id")
    var nombre = document.getElementById("nombre")
    var fecha_nacimiento = document.getElementById("fecha_nacimiento")
    var email = document.getElementById("email")
    var telefono = document.getElementById("telefono")

    var estudiantes  = JSON.parse(
        localStorage.getItem("estudiantes") || "[]") 
        
    for (const estudiantes of estudiantes) {

        if (estudiantes.id == id.value) {

            estudiantes.nombre = nombre.value
            estudiantes.fecha_nacimiento = fecha_nacimiento.value
            estudiantes.email = email.value

            break
        }

    }

    localStorage.setItem("estudiantes", JSON.stringify(estudiantes))    

}

function eliminarEstudiantes() {

    var id = document.getElementById("id")
    
    var estudiantes  = JSON.parse(
        localStorage.getItem("estudiantes") || "[]") 
    
    console.log(estudiantes)

    for (let i = 0; i < estudiantes.length; i++) {
        
        if (estudiantes[i].id == id.value) {

            alert ("Estudiante " + estudiante[i].id + " eliminado")            

            estudiantes.splice(i,1)
            localStorage.setItem("estudiantes", JSON.stringify(estudiantes)) 
            

            break
        }
        
    }

}

function buscarEstudiantes() {

    var id = document.getElementById("id")
    
    var estudiantes  = JSON.parse(
        localStorage.getItem("estudiantes") || "[]") 
        
    for (const estudiante of estudiantes) {

        if (estudiante.id == id.value) {

            var nombre = document.getElementById("nombre")
            var fecha_nacimiento = document.getElementById("fecha_nacimiento")
            var email = document.getElementById("email")

            id.value = estudiantes.id
            nombre.value = estudiantes.nombre
            fecha_nacimiento.value = estudiantes.fecha_nacimiento
            email.value = estudiantes.email

            break
        }
       
    }


}
