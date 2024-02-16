const modoDark = document.getElementById('modoDark');
const body = document.body;

modoDark.addEventListener('click' ,()=> {
    body.classList.toggle('modo-dark');
});