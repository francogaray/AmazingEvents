var eventos2= [];

async function getData() {
    await fetch("https://amazingeventsapi.herokuapp.com/api/eventos")
    .then(response => response.json())
    .then(json => eventos2.push(...json.eventos))

    var id = location.search.split("?id=").filter(Number)
    var selectedId = Number (id[0])
    var event = eventos2.find(function(event){
        return event.id == selectedId
    })
    var templateHtml = ` 
    <div class="card1">
        <div class="divCard">
            <a href="evento.html?id=${event.id}">
                <h3>${event.name}</h3>
            </a>
            <h4>${event.category}</h4>
            <p class="datosFechas">${event.date} - ${event.place}</p> 
            <p> ${event.description}</p>
            <img src="${event.image}" alt="">
        </div>
    </div>
    `
    document.querySelector("#tarjetaInd").innerHTML = templateHtml
}
getData();
