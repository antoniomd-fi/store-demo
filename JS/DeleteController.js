function deleteRowListener() {
    let buttons = document.getElementsByClassName("delete-button")

    for (let i = 0; i < buttons.length; i++) {
        buttons.item(i).addEventListener('click', deleteRow)
    }
}

function deleteRow(e) {
    e.preventDefault()

    let id = parseInt(this.closest('tr').firstElementChild.textContent)

    let decision = confirm("¿Está seguro de eliminar este registro?. La acción no se podrá revertir")
    if (decision) {
        for (let i = 0; i < dataTable.length; i++) {
            if (dataTable[i].id === id) { dataTable.splice(i, 1) }
        }
        updateStorage(dataTable)
        this.closest('tr').remove()
        return
    }

    alert("Operación cancelada")

}