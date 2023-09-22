//Dom

const nome = document.querySelector('#nomejg')
const foto = document.querySelector('#player')
const ney = document.querySelector('#Neymar')
const Haa = document.querySelector('#Haaland')
const mess = document.querySelector('#Messi')
const mba = document.querySelector('#Mbappe')
const dyba = document.querySelector('#Dybala')
const cria = document.querySelector('#Cr7')

// EVENTO
 ney.addEventListener('click',neymar)
 dyba.addEventListener('click',dybala)
 mess.addEventListener('click',Messi)
 cria.addEventListener('click',Cristiano)
 mba.addEventListener('click',Mbappe)
 Haa.addEventListener('click',Haaland)
 


function neymar(){
    nome.textContent ="Neymar"
    foto.src = "img/neymar.webp"
}
function dybala(){
    nome.textContent ="Dybala"
    foto.src = "img/dybala.webp"
}
function Messi(){
    nome.textContent ="Messi"
    foto.src = "img/messi.jpg"
}
function Cristiano(){
    nome.textContent ="Cristiano"
    foto.src = "img/cr7.jpg"
}
function Mbappe(){
    nome.textContent ="Mbappe"
    foto.src = "img/mbappe.webp"
}
function Haaland(){
    nome.textContent ="Haaland"
    foto.src = "img/haaland.webp"
}

