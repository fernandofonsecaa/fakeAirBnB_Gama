
var xhr = new XMLHttpRequest();

xhr.open("GET", "https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72",true)



xhr.addEventListener("load", function(){
    //console.log(xhr.responseText)

    var dados = JSON.parse(xhr.responseText)
    dados.forEach(element => {

        // console.log(element.name)
        // divContainer = document.createElement('div')
        // divContainer.className = 'container'

        card = document.createElement('div')
        card.className = 'card col-12 col-md-4 p-0 m-1 card-largura'

        image = document.createElement('img')
        image.className='card-img-top card-posicao-imagem'
        image.src = (element.photo)

        cardBody = document.createElement('div')
        cardBody.className = 'card-body'

        // cardText = document.createElement('div')
        // cardText.className = 'card-text'

        propertyType = document.createElement('p')
        propertyType.className = 'card-title'
        propertyType.innerHTML = (element.property_type)

        propertyName = document.createElement('p')
        propertyName.className = 'card-text'
        propertyName.innerHTML = (element.name)

        propertyPrice = document.createElement('p')
        propertyPrice.className = 'card-text'
        propertyPrice.innerHTML = (`<strong>R$ ${element.price}</strong>/noite`)  


        row.appendChild(card)
        // divContainer.appendChild(card)
        card.appendChild(image)
        card.appendChild(cardBody)
        // cardBody.appendChild(cardText)
        cardBody.appendChild(propertyType)
        cardBody.appendChild(propertyName)
        cardBody.appendChild(propertyPrice)
  
    });
    
})

xhr.send()






   
    



