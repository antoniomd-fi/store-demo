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
            const index = dataTable.findIndex(element => element.id == code)
            dataTable[index].name = description
            dataTable[index].price = parseInt(price)
            updateStorage(dataTable)

            return
        }
    }
    alert ("El código ingresado no existe")
}