const max = 6;
const min = 1;

const btn = document.querySelector('#btn');

btn.addEventListener('click', function(){
    const randomNum = Math.floor(Math.random()* max) + min;
    document.querySelector('p').innerHTML = `roll = ${randomNum}`;
});