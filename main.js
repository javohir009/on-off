const on =document.querySelector(".on")
const off  =document.querySelector(".off")
const body =document.querySelector(".body")
 
off.style.display = 'none'

on.addEventListener(`click`,() => {
    off.style.display = `block`
    on.style.display = `none`
    body.style.backgroundColor =`black`
})

off.addEventListener(`click`,() => {
    on.style.display = `block`
    off.style.display =`none`
    body.style.backgroundColor =`white`
})