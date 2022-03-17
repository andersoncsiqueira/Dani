let lettle = document.querySelectorAll('th')
let ths = document.querySelectorAll('th')

let imgAmor = document.querySelector('#amor')
let imgAmor2 = document.querySelector('#amor2')
let imgGostosa = document.querySelector('#gostosa')
let imgGostosa2 = document.querySelector('#gostosa2')
let imgLinda = document.querySelector('#linda')
let imgLinda2 = document.querySelector('#linda2')
let imgCheirosa = document.querySelector('#cheirosa')
let imgCheirosa2 = document.querySelector('#cheirosa2')
let imgDelicia = document.querySelector('#delicia')
let imgDelicia2 = document.querySelector('#delicia2')
let imgCarinhosa = document.querySelector('#carinhosa')
let imgCarinhosa2 = document.querySelector('#carinhosa2')
let imgInteligente = document.querySelector('#inteligente')
let imgInteligente2 = document.querySelector('#inteligente2')
let imgCenoura = document.querySelector('#cenoura')
let imgCenoura2 = document.querySelector('#cenoura2')
let imgPerfeita = document.querySelector('#perfeita')
let imgPerfeita2 = document.querySelector('#perfeita2')

let table = document.querySelector('table')
let show = document.querySelector('#show')
let orientations = document.querySelector('#orientation')
let stars = document.querySelector('#containStars')
let main = document.querySelector('main')
let imgEnd = document.querySelector('#end')
let allButtons = document.querySelectorAll('button')
let doorLeft = document.querySelector('#doorleft')
let doorRight = document.querySelector('#doorright')

const baloesAll = document.querySelectorAll('.baloesAll')

let counter = 0
let clicked = Array.from(lettle)
.filter(clike => clike.classList.contains('select'))
.forEach(click => {
    click.addEventListener('click', event => {
        click.classList.add('selectClick')      
    })
})



                       //      icones // 

 
                      

const img = (lettle,img1,img2,classImg) => {

let contImg = 1


let img = Array.from(lettle)
  .filter(amor => amor.classList.contains(`${classImg}`)).forEach(amor => {
       amor.addEventListener('click', event => {
          amor.classList.add('img-icon')
          contImg += 1
          if(contImg > classImg.length) {
              img1.classList.add('img-off')
              img2.classList.remove('img-off')
              
          }
        
  })
  })
  
}
img(ths,imgAmor,imgAmor2,'amor')
img(ths,imgGostosa,imgGostosa2,'gostosa')
img(ths,imgLinda,imgLinda2,'linda')
img(ths,imgCheirosa, imgCheirosa2, 'cheirosa')
img(ths,imgDelicia, imgDelicia2, 'delicia')
img(ths,imgCarinhosa, imgCarinhosa2, 'carinhosa')
img(ths,imgInteligente, imgInteligente2, 'inteligente')
img(ths,imgCenoura, imgCenoura2, 'cenoura')
img(ths,imgPerfeita, imgPerfeita2, 'perfeita')
  
                       
                       // animations //



const settime = setInterval(()=>{
    
    let clicado = Array.from(lettle).filter(item => item.classList.contains('selectClick'))
    
    if(clicado.length === 3 ) {
       
        clearInterval(settime)

        setTimeout(() => {
           // table.classList.toggle('img-off')
            show.classList.toggle('img-off')
            show.classList.toggle('show')
            show.classList.add('showAnimation') 
            doorLeft.classList.add('door-left')
            doorRight.classList.add('door-right')
            orientations.classList.add('orientation')
            orientations.textContent = 'Clique no quadro!!'
            stars.classList.add('img-off') 

        },2000)
              
    }

},1)


let buttons = Array.from(allButtons)

buttons.forEach(button => {
    button.addEventListener('click', event => {
        main.classList.add('img-off')
        imgEnd.classList.toggle("img-off")
    })
})
