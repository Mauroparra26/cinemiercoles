let peliculas=[
    {
        nombre:"avatar",
        genero:"Ciencia ficción",
        duracion:220,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemiercolesjjg.appspot.com/o/avatar.png?alt=media&token=4775b8fa-5e9c-42bb-9ae3-f0f0bf010f0d",
        sinopsis:"loremjasjsadjsajsdajsajsdajsda",
        clasificacion:"+18",
        idioma:"En subtitulado"
    },
    {
        nombre:"La Bestia",
        genero:"suspenso",
        duracion:120,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemiercolesjjg.appspot.com/o/la%20bestia.jpg?alt=media&token=b46a53b9-3af7-4fc2-9c7e-966ec628f719",
        sinopsis:"loremjasjsadjsajsdajsajsdajsda",
        clasificacion:"+18",
        idioma:"En subtitulado"
    }
   
]


//RECORRIENDO UN ARREGLO EN JS
peliculas.forEach(function(pelicula){
    //console.log(pelicula)
    console.log(pelicula.nombre)
    console.log(pelicula.genero)
    console.log(pelicula.duracion)
    console.log(pelicula.poster)
    console.log(pelicula.sinopsis)
    console.log(pelicula.clasificacion)
    console.log(pelicula.idioma)
})
