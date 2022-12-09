
let table = document.getElementById('table')
let dataStorage = localStorage.getItem('table')
let dataStorageParse = JSON.parse(dataStorage)

document.addEventListener('DOMContentLoaded', renderTable)

function updateStorage(dataTable) {
    localStorage.setItem('table', JSON.stringify(dataTable))
}

function renderTable(){
    if (dataStorageParse != null){
        dataStorageParse.forEach(element => {
            let row = document.createElement('tr')
            let cell1 = document.createElement('td')
            let cell2 = document.createElement('td')
            let cell3 = document.createElement('td')
            let cell4 = document.createElement('td')
            let cell5 = document.createElement('td')
        
            cell1.innerHTML = element.id
            cell2.innerHTML = element.name
            cell3.innerHTML = element.price
            cell4.innerHTML = `<button type="button" class="btn btn-outline-danger delete-button">Borrar</button>`
            cell5.innerHTML = `<Button class="select-button btn btn-outline-info">Seleccionar</Button>`
        
            row.appendChild(cell1)
            row.appendChild(cell2)
            row.appendChild(cell3)
            row.appendChild(cell4)
            row.appendChild(cell5)
        
            table.appendChild(row)
        
            deleteRowListener()
            selectRowListener()
        });
        
    }
}


