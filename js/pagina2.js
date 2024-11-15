document.getElementById('programForm').addEventListener('submit', function (event) {
    event.preventDefault()

    const codigo = document.getElementById('codigo').value
    const nombre = document.getElementById('nombre').value
    const duracion = document.getElementById('duracion').value
    const modalidad = document.getElementById('modalidad').value
    const fechaInicio = document.getElementById('fechaInicio').value

    const programas = JSON.parse(localStorage.getItem('programas')) || []

    if (programas.some(programa => programa.codigo === codigo)) {
        document.getElementById('mensaje').innerText = 'Este codigo ya existe.'
        return
    }

    if (programas.some(programa => programa.nombre === nombre)) {
        document.getElementById('mensaje').innerText = 'El nombre del programa ya existe.'
        return
    }

    const fechaActual = new Date()
    if (fechaInicio && new Date(fechaInicio) > fechaActual) {
        document.getElementById('mensaje').innerText = 'La fecha de inicio debe ser pasada o actual.'
        return
    }

    const nuevoPrograma = {
        codigo,
        nombre,
        duracion,
        modalidad,
        fechaInicio
    }
    
    programas.push(nuevoPrograma)
    localStorage.setItem('programas', JSON.stringify(programas))

    document.getElementById('mensaje').innerText = 'Programa agregado exitosamente.'
    document.getElementById('programForm').reset()
})