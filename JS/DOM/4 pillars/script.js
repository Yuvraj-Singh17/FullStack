// let h1 = document.querySelector('h1')

// // h1.innerHTML = 'I am Batman'


// // h1.style.color = 'pink'
// // h1.style.backgroundColor = 'white'

// // h1.addEventListener('click' , function(){
// //     h1.style.color = 'green';
// // })

var h1 = document.querySelector('h1')
var btn = document.querySelector('button')
btn.addEventListener('click' , function(){
    h1.innerHTML = 'I am Superman'
    h1.style.color = 'red';
    h1.style.backgroundColor = 'blue';
    h1.style.fontSize = '100px';
})