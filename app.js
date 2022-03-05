let lettle = document.querySelectorAll('th')
let amorTH = document.querySelectorAll('th')

let imgAmor = document.querySelector('#amor')
let imgAmor2 = document.querySelector('#amor2')
let imgGostosa = document.querySelector('#gostosa')
let imgGostosa2 = document.querySelector('#gostosa2')
let imgLinda = document.querySelector('#linda')
let imgLinda2 = document.querySelector('#linda2')

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

img(amorTH,imgAmor,imgAmor2,'amor')
img(amorTH,imgGostosa,imgGostosa2,'gostosa')
img(amorTH,imgLinda,imgLinda2,'linda')
  
                       
                       
// amor
/*let contAmor = 0
let amor = Array.from(amorTH)
.filter(amor => amor.classList.contains('amor')).forEach(amor => {
     amor.addEventListener('click', event => {
        amor.classList.add('amor-icon')
        contAmor += 1
        if(contAmor >3) {
            imgAmor.classList.add('amor-off')
            imgAmor2.classList.remove('amor-off')
        }
})
})*/

// hot 

