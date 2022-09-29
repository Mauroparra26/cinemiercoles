let asientos=[
    [{id:"a1",estado:2},{id:"b1",estado:2},{id:"c1",estado:0},{id:"d1",estado:0}],
    [{id:"a2",estado:0},{id:"b2",estado:0},{id:"c2",estado:0},{id:"d2",estado:0}],
    [{id:"a3",estado:0},{id:"b3",estado:0},{id:"c3",estado:0},{id:"d3",estado:0}]
]

//PINTAR DESDE JS MI SALA DE CINE:
let cinema=document.getElementById("salacinema")

//Recorrer los asientos y aplicar traversing
asientos.forEach(function(hilera){

    let fila=document.createElement("div")
    fila.classList.add("row")

    hilera.forEach(function(asiento){
        
        let columna= document.createElement("div")
        columna.classList.add("col-3")

        let fotoSilla=document.createElement("img")
        fotoSilla.classList.add("img-fluid","w-100")
        fotoSilla.setAttribute("id",asiento.id)

        if(asiento.estado==0){
            fotoSilla.src="../../assets/img/cinema-chair.png"
        }else if(asiento.estado==2){
            fotoSilla.src="../../assets/img/cinema-red.png"
        }

        //padres e hijos
        columna.appendChild(fotoSilla)
        fila.appendChild(columna)

    })
    cinema.appendChild(fila)
})