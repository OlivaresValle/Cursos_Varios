let form = document.createElement('form');
form.id = 'mi-formulario';
let input = document.createElement('input');
input.setAttribute('type','text');
let btn = document.createElement('button');
btn.innerText = 'Enviar'

form.append(input);
form.append(btn);

document.body.append(form);

form.onmouseenter = e => {
    console.log('entra el mouse',e);
}

form.onmouseleave = e =>{
    console.log('sale el mouse');
}

input.onfocus = e => {
    console.log('input con focus');
}

input.onblur = e => {
    console.log('input perdio el foco')
}

input.onchange = e =>{
    console.log('valor cambia', e.target.value);
}

// btn.onclick = e => {
//     e.preventDefault();
//     console.log('boton clickeado');
// }

btn.addEventListener('click',e => {
    e.preventDefault();
    console.log('boton clickeado');
})