let dataTable
localStorage.getItem('table') != null ? dataTable = JSON.parse(localStorage.getItem('table')): dataTable = []


function validateId() {

    let table = document.getElementById("table")
    let code = document.getElementById("code").value


    if (code == 0) {
        alert("El código ingresado debe ser diferente de cero")
        return
    }


    for (let i = 1, row; row = table.rows[i]; i++) {
        col = row.cells[0]
        if (col.innerHTML === code) {
            alert("Ya existe un artículo con dicho código")
            return
        }
    }

    addNewRow(code)

}

function addNewRow(code) {

   let table = document.getElementById("table").insertRow()
    let col1 = table.insertCell(0)
    let col2 = table.insertCell(1)
    let col3 = table.insertCell(2)
    let col4 = table.insertCell(3)
    let col5 = table.insertCell(4)

    col1.innerHTML = code
    col2.innerHTML = document.getElementById("description").value
    col3.innerHTML = document.getElementById("price").value
    col4.innerHTML = `<button class="btn btn-outline-danger delete-button" >Borrar</button>`
    col5.innerHTML = `<button class="btn btn-outline-info select-button">Seleccionar</button>`
    
    let object = {"id":parseInt(code), "name": col2.innerHTML, "price":parseInt(col3.innerHTML)}
    dataTable.push(object)
   
    updateStorage(dataTable)

    deleteRowListener()
    selectRowListener()
}

