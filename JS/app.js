
function deleteRowListener() {
    let buttons = document.getElementsByClassName("delete-button")

    for (let i = 0; i < buttons.length; i++) {
        buttons.item(i).addEventListener('click', deleteRow)
    }
}

function deleteRow (e){
    e.preventDefault()
    let decision = confirm("¿Está seguro de eliminar este registro?. La acción no se podrá revertir")
   
    decision == true ? this.closest('tr').remove() : alert("Operación cancelada")
    
}

function selectRowListener(button){
    let buttons = document.getElementsByClassName("select-button")

    for (let i = 0; i < buttons.length; i++) {
        buttons.item(i).addEventListener('click', getValues)
    }
    
}

function getValues(e){
    let values = new Array()

    let cells =e.srcElement.parentElement.parentElement.getElementsByTagName("td")

   for (let i = 0; i < 3; i++) {
        values.push(cells[i].innerHTML)
    }

    setValuesOnInputs(values)
}

function setValuesOnInputs(values){
    let code = document.getElementById('code')
    let description = document.getElementById('description')
    let price = document.getElementById('price')
    
    code.value = values[0]
    description.value = values[1]
    price.value = values[2]
}

deleteRowListener()
selectRowListener()

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
    deleteRowListener()
    selectRowListener()
}


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

function modifyRow(){
    let table = document.getElementById("table")
    let code = document.getElementById('code').value
    let description = document.getElementById('description').value
    let price = document.getElementById('price').value

    for (let i = 1, row; row = table.rows[i]; i++) {
        col = row.cells[0]
        if (col.innerHTML === code) {
            row.cells[0].innerHTML = code
            row.cells[1].innerHTML = description
            row.cells[2].innerHTML = price
            return
        }
    }
    alert ("El código ingresado no existe")
}


