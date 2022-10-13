//consumir datos del api de spotify 

//1 URI. ES LA URL + ENDPOIN (ENDPOINT ES EL NOMBRE DEL SERIVICO)
const URI="https://api.spotify.com/v1/artists/7mHAXsMI3hAj3dUZMR4fnt/top-tracks?market=US"

//2. TOKEN DE ACCESO

const TOKEN="Bearer BQCn_VrLYRwK3W8ktg1ryarJHazHBlp38HncYV0Z9ODZ8l8QLctI_KWsGZ-pGdC3OrkO3kR0brGg49Bnu8yO7ILSz1TuhELZhNSxUpYDDqwxJIHcAcQIO8IcM1StQl72KLVVQlT9qecjUl3JL5nX7FXIYTVS6sQqVw8oJQR2RgahXNOGHZBOO-zOPTGdi0BvPChaHNI"

//3. LA PETICION

const PETICION={
    method:"GET",
    headers:{Authorization:TOKEN},

}

let fila=document.getElementById("fila")

//4. USAMOS LA PROMESA FETCH PARA CONSUMIR EL API
fetch(URI,PETICION)
.then(function(respuesta){ //una funcion que reciba respuesya y retorne esa respuesta
    return respuesta.json() //y lo pase a json
})
.then(function(respuesta){
    let canciones=respuesta.tracks//si encontro la respuesta pintarla guardada en variable canciones
    canciones.forEach(function(cancion){
        console.log(cancion.name)
        console.log(cancion.preview_url)

        let columna=document.createElement("div")
        columna.classList.add("col")

        let tarjeta=document.createElement("div")
        tarjeta.classList.add("card","h-100")

        let audio=document.createElement("audio")
        audio.setAttribute("controls","controls")
        audio.src=cancion.preview_url

        let nombreCancion=document.createElement("h1")
        nombreCancion.classList.add("text-center")
        nombreCancion.textContent=cancion.name

        tarjeta.appendChild(nombreCancion)
        tarjeta.appendChild(audio)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)

    })
})

.catch(function(error){
    console.log(error) //por si falla la peticion, pintar error
})