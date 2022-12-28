import { click } from "@testing-library/user-event/dist/click";


let boton1=document.getElementById('boton1')
boton1.addEventListener('click',function(){
let root = document.getElementById('root')

let container=document.createElement('div')
container.classList.add('col')

let tarjeta = document.createElement("div")
tarjeta.classList.add("card")
tarjeta.classList.add("h-100" )
   
let title = document.createElement('label')
title.classList.add('form-label')
title.textContent='Title'

let titulo=document.createElement('input')
titulo.classList.add('form-control')

let description = document.createElement('label')
description.classList.add('form-label',)
description.textContent='Description'

let descripcion=document.createElement('input')
descripcion.classList.add('form-control')

let price = document.createElement('label')
price.classList.add('form-label')
price.textContent='price'

let precio=document.createElement('input')
precio.classList.add('form-control')

let content = document.createElement('label')
content.classList.add('form-label')
content.textContent='content'

let contenido=document.createElement('input')
contenido.classList.add('form-control')

let boton2=document.createElement('button')
boton2.setAttribute('type','button')
boton2.classList.add("btn","btn-warning","mx-4","mb-4")
boton2.textContent="Save"

let boton3=document.createElement('button')
boton3.setAttribute('type','button')
boton3.classList.add("btn","btn-warning","mx-4","mb-4")
boton3.textContent="Cancel"


 boton2.addEventListener('click',function(){
    
   
    let contenedor=document.getElementById('contenedor')

    
    
    let tarjeta = document.createElement("div")
    tarjeta.classList.add("card")
    tarjeta.classList.add("h-100" )
    tarjeta.classList.add('w-100')

    let titular=document.createElement('h2')
    titular.textContent=titulo.value
    

    let desc=document.createElement('p')
    desc.textContent=descripcion.value

    let conten= document.createElement('p')
    conten.textContent=contenido.value
    let precios=document.createElement('h1')
    precios.textContent=precio.value

    let botonDelete=document.createElement('button')
    botonDelete.setAttribute('type','button')
    botonDelete.classList.add('btn', 'btn-danger','btnWidth')
    botonDelete.textContent='Delete'

    let botonEdit=document.createElement('button')
    botonEdit.setAttribute('type','button')
    botonEdit.classList.add('btn', 'btn-info','btnWidth')    
    botonEdit.textContent='Edit'

    



    contenedor.appendChild(tarjeta)
    tarjeta.appendChild(titular)
    tarjeta.appendChild(desc)
    tarjeta.appendChild(conten)
    tarjeta.appendChild(precios)
    tarjeta.appendChild(botonDelete)
    tarjeta.appendChild(botonEdit)
    

   


})








root.appendChild(tarjeta)
tarjeta.appendChild(title)
tarjeta.appendChild(titulo)
tarjeta.appendChild(description)
tarjeta.appendChild(descripcion)    
tarjeta.appendChild(price)
tarjeta.appendChild(precio)
tarjeta.appendChild(content)
tarjeta.appendChild(contenido)
tarjeta.appendChild(boton2)
tarjeta.appendChild(boton3)
})
 




   


export function Home(){
    
    return(
       <>
       </>
        
    )
}