const dataContent = document.getElementById('results')

/*let dataStorage = localStorage.getItem('table')
let dataStorageParse = JSON.parse(dataStorage)*/

if (dataStorageParse != null){
    dataStorageParse.forEach(element => {
        let firstDiv = document.createElement('div')
        firstDiv.className = "card card-meal m-4"
        firstDiv.style = "width: 20rem;"
    
        let secondDiv = document.createElement('div')
        secondDiv.className = "card-body"
        
        let img = document.createElement('img')
        img.src = "../assets/image.jpg"
        img.alt ="product"
    
        let name = document.createElement('h5')
        name.className = "card'title"
        let jump = document.createElement('br')
    
        let price = document.createElement('span')
        price.className ="read-more"
    
        price.innerHTML = element.price
        name.innerHTML = element.name 
    
        secondDiv.appendChild(name)
        secondDiv.appendChild(jump)
        secondDiv.appendChild(price)
    
        firstDiv.appendChild(img)
        firstDiv.appendChild(secondDiv)
    
        dataContent.appendChild(firstDiv)
    });
}

