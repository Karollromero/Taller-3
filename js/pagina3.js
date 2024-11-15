function guardar() {

    var id_matricula = document.getElementById("id_matricula")
    var id = document.getElementById("id")
    var codigo_programa = document.getElementById("codigo_programa")
    var fecha_matricula = document.getElementById("fecha_matricula")
    var estado_matricula = document.getElementById('estado_matricula')

    matricula = new matricula(id_matricula.value,id.value,
        codigo_programa.value,fecha_matricula.value,estado_matricula.value)

    var matricula  = JSON.parse(
        localStorage.getItem("matricula") || "[]")  

    matricula.push(matricula)

    localStorage.setItem("matricula", JSON.stringify(matricula))    

    id_matricula.value = ''
    id.value = ''
    codigo_programa.value = ''
    fecha_matricula.value = ''
    estado_matricula.value = ''
    id_matricula.focus()
    
    alert("Matrícula guardada exitosamente")
    

    console.log(matricula)



}


