var aEvents = [] // declaro un array vacio, donde le asignare el objeto Json completo
var dateActual = "" //declaro la variable DATEACTUAL la cual le asignaré propiedad fecha actual del array "aEvebnts"
var futuro = [] // declaro array futuro para...
var pasado = [] // declaro array pasado para...

var eventos=[] // declaro array para asignarle luego el valor de...
var categorias=[] // declaro array para asignarle luego el valor de...
var categoriasFiltradas=[] // declaro array para asignarle luego el valor de...

var inputSearch = document.getElementById("inputSearch"); //declaro la variable inputSearch y guardo el elemento hmtl con id #inputSearch
inputSearch = document.addEventListener("keyup",search) //le asigno un escuchador de eventos al inputSearch cuando levante una tecla
                                                        // y le paso como parámetro la funcion search (l:14)

function search(event){ //declaro la funcion search y le paso como parametro un evento
    var entradaDeTexto = event.target.value //declaro variable y guardo el valor del objetivo del parametro, es decir "evento"
    var data = eventos.filter(evento => evento.name.toLowerCase().includes(entradaDeTexto.toLowerCase())) 
    //declaro var "data" y aplico filter para que...
    displayCard(data) //ejecuto la funcion display y le paso como parametro "data"
    console.log(data)
}

async function getData() {
    await fetch("./AmazingEvents.json")
        .then(response => response.json())
        .then(json => aEvents.push(json))
        eventos = aEvents[0].eventos
        // console.log(eventos)
        categorias.push(...eventos.map(categoria => categoria.category))
        var limpiarCategory = new Set (categorias)
        categoriasFiltradas = [...limpiarCategory]


    dateActual = aEvents[0].fechaActual

    futuro.push(...aEvents[0].eventos.filter(item => item.date > dateActual))
    var tarjetaF = futuro.slice(0, 3)


    pasado.push(...aEvents[0].eventos.filter(item => item.date < dateActual))
    var tarjetaP = pasado.slice(0, 3)

    displayCard(tarjetaF)
    displayCard2(tarjetaP)
}

getData()

function displayCard(data) {
    var toDisplay = []

    if (data) {
        toDisplay = []
        toDisplay.push(...data)
    } else {
        toDisplay = []
        toDisplay.push(...aEvents)
    }

    var templateHtml = ""

    toDisplay.map(fiesta => {
        templateHtml +=
            `<div class="card1 content-cards">
        <div class="divCard">
            <a href="evento.html">
                <h3>${fiesta.category}</h3>
            </a>
            <p class="datosFechas">${fiesta.date}-${fiesta.place}</p>
            <p>${fiesta.description}</p>
            <img src="./img/Images/${fiesta.image}" alt="imagen-del-evento">
            <a class="verEvento" href="evento.html?id=${fiesta.id}">Ver Evento</a>
        </div>
    </div>`
    })
    document.querySelector(".tarjetaJs").innerHTML = templateHtml
}

function displayCard2(data) {
    var toDisplay = []

    if (data) {
        toDisplay = []
        toDisplay.push(...data)
    } else {
        toDisplay = []
        toDisplay.push(...aEvents)
    }

    var templateHtml = ""

    toDisplay.map(fiesta => {
        templateHtml +=
            ` <div class="card2">
        <div class="divCard">
            <a href="evento.html">
                <h3>${fiesta.category}</h3>
            </a>
            <p class="datosFechas">${fiesta.date}-${fiesta.place}</p>
            <p>${fiesta.description}</p>
            <img src="./img/Images/${fiesta.image}" alt="imagen-del-evento">
            <a class="verEvento" href="evento.html?id=${fiesta.id}">Ver Evento</a>
        </div>
    </div>`
    })
    document.querySelector(".tarjetaJs2").innerHTML = templateHtml
}