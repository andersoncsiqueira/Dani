let lettle = document.querySelectorAll('th')

let clicked = Array.from(lettle)
.filter(clike => clike.classList.contains('select'))
.forEach(click => {
    click.addEventListener('click', event => {
        click.classList.add('selectClick')
        
    })
})


console.log(clicked)

