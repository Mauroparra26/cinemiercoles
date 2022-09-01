let peliculas=[
    {
        nombre:"avatar",
        genero:"Ciencia ficción",
        duracion:220,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemiercolesjjg.appspot.com/o/avatar.png?alt=media&token=4775b8fa-5e9c-42bb-9ae3-f0f0bf010f0d",
        sinopsis:"Entramos en el mundo Avatar de la mano de Jake Sully, un ex-Marine en silla de ruedas, que ha sido reclutado para viajar a Pandora, donde existe un mineral raro y muy preciado que puede solucionar la crisis energética existente en la Tierra",
        clasificacion:"+18",
        idioma:"En subtitulado"
    },
    {
        nombre:"La Bestia",
        genero:"suspenso",
        duracion:120,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemiercolesjjg.appspot.com/o/la%20bestia.jpg?alt=media&token=b46a53b9-3af7-4fc2-9c7e-966ec628f719",
        sinopsis:"Un hombre que acaba de enviudar y sus dos hijas adolescentes viajan a una reserva de caza en Sudáfrica. Sin embargo, su viaje de curación pronto se convierte en una lucha por la supervivencia cuando un león sediento de sangre comienza a acecharlos.",
        clasificacion:"+18",
        idioma:"En subtitulado"
    },
    {
        nombre:"avatar",
        genero:"Ciencia ficción",
        duracion:220,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemiercolesjjg.appspot.com/o/avatar.png?alt=media&token=4775b8fa-5e9c-42bb-9ae3-f0f0bf010f0d",
        sinopsis:"Entramos en el mundo Avatar de la mano de Jake Sully, un ex-Marine en silla de ruedas, que ha sido reclutado para viajar a Pandora, donde existe un mineral raro y muy preciado que puede solucionar la crisis energética existente en la Tierra",
        clasificacion:"+18",
        idioma:"En subtitulado"
    },
    {
        nombre:"La Bestia",
        genero:"suspenso",
        duracion:120,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemiercolesjjg.appspot.com/o/la%20bestia.jpg?alt=media&token=b46a53b9-3af7-4fc2-9c7e-966ec628f719",
        sinopsis:"Un hombre que acaba de enviudar y sus dos hijas adolescentes viajan a una reserva de caza en Sudáfrica. Sin embargo, su viaje de curación pronto se convierte en una lucha por la supervivencia cuando un león sediento de sangre comienza a acecharlos.",
        clasificacion:"+18",
        idioma:"En subtitulado"
    },
    {
        nombre:"avatar",
        genero:"Ciencia ficción",
        duracion:220,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemiercolesjjg.appspot.com/o/avatar.png?alt=media&token=4775b8fa-5e9c-42bb-9ae3-f0f0bf010f0d",
        sinopsis:"Entramos en el mundo Avatar de la mano de Jake Sully, un ex-Marine en silla de ruedas, que ha sido reclutado para viajar a Pandora, donde existe un mineral raro y muy preciado que puede solucionar la crisis energética existente en la Tierra",
        clasificacion:"+18",
        idioma:"En subtitulado"
    },
    {
        nombre:"La Bestia",
        genero:"suspenso",
        duracion:120,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemiercolesjjg.appspot.com/o/la%20bestia.jpg?alt=media&token=b46a53b9-3af7-4fc2-9c7e-966ec628f719",
        sinopsis:"Un hombre que acaba de enviudar y sus dos hijas adolescentes viajan a una reserva de caza en Sudáfrica. Sin embargo, su viaje de curación pronto se convierte en una lucha por la supervivencia cuando un león sediento de sangre comienza a acecharlos.",
        clasificacion:"+18",
        idioma:"En subtitulado"
    },
    {
        nombre:"avatar",
        genero:"Ciencia ficción",
        duracion:220,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemiercolesjjg.appspot.com/o/avatar.png?alt=media&token=4775b8fa-5e9c-42bb-9ae3-f0f0bf010f0d",
        sinopsis:"Entramos en el mundo Avatar de la mano de Jake Sully, un ex-Marine en silla de ruedas, que ha sido reclutado para viajar a Pandora, donde existe un mineral raro y muy preciado que puede solucionar la crisis energética existente en la Tierra",
        clasificacion:"+18",
        idioma:"En subtitulado"
    },
    {
        nombre:"La Bestia",
        genero:"suspenso",
        duracion:120,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemiercolesjjg.appspot.com/o/la%20bestia.jpg?alt=media&token=b46a53b9-3af7-4fc2-9c7e-966ec628f719",
        sinopsis:"Un hombre que acaba de enviudar y sus dos hijas adolescentes viajan a una reserva de caza en Sudáfrica. Sin embargo, su viaje de curación pronto se convierte en una lucha por la supervivencia cuando un león sediento de sangre comienza a acecharlos.",
        clasificacion:"+18",
        idioma:"En subtitulado"
    }
   
]


//RECORRIENDO UN ARREGLO EN JS

let fila=document.getElementById("fila")

peliculas.forEach(function(pelicula){
    
    //console.log(pelicula)
    console.log(pelicula.nombre)
    console.log(pelicula.genero)
    console.log(pelicula.duracion)
    console.log(pelicula.poster)
    console.log(pelicula.sinopsis)
    console.log(pelicula.clasificacion)
    console.log(pelicula.idioma)

    //TRAVERSING (CREAR ETIQUETAS DE HTML DESDE JS)

    //1. creamos una columna para cada pelicula
    let columna=document.createElement("div")
    columna.classList.add("col")

    //2. creamos una tarjeta para cada pelicula
    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card","h-100")

    //3. creamos una foto para cada pelicula
    let poster=document.createElement("img")
    poster.classList.add("card-img-top")
    poster.src=pelicula.poster

    //4. Creamos el nombre de la pelicula
    let nombre = document.createElement('h3')
    nombre.classList.add('card-title','text-center')
    nombre.textContent = pelicula.nombre

    //5. Creamos el genero de cada pelicula
    let genero = document.createElement("h5")
    genero.classList.add("text-start")
    genero.textContent = "Genero: "+pelicula.genero

    //6. Creamos el idioma de cada pelicula
    let idioma=document.createElement("h6")
    idioma.classList.add("fw-bold")
    idioma.textContent=pelicula.idioma

    //7. Creamos la sinopsis
    let sinopsis=document.createElement("p")
    sinopsis.classList.add("d-none")
    sinopsis.textContent=pelicula.sinopsis
    

    //Padres e Hijos
    tarjeta.appendChild(poster)
    tarjeta.appendChild(nombre)
    tarjeta.appendChild(genero)
    tarjeta.appendChild(idioma)
    tarjeta.appendChild(sinopsis)

    columna.appendChild(tarjeta)
    fila.appendChild(columna)



})

//DETECTANDO SELECCION DE UNA PELICULA
fila.addEventListener("click",function(){
    alert("Esta seleccionando una pelicula")
})
