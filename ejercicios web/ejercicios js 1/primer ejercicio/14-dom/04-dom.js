let el = document.createElement('p');
el.innerText = 'Elemento creado';


// puede recibir texto y nodos
document.body.append(el);

el.remove();

document.body.prepend(el);

let div = document.createElement('div');
div.innerText = 'Soy un Texto';

el.replaceWith(div);

// reemplaza el primero con el ultimo
document.body.replaceChild(el, div);
// elimina el elemento
document.body.removeChild(el);
// agrega al elemento hijo
document.body.appendChild(el);

// inserta uno antes que otro
document.body.insertBefore(div, el);

// inserta un elemento de forma adyacente
document.body.insertAdjacentElement('beforebegin',div);
document.body.insertAdjacentElement('afterbegin',div);
document.body.insertAdjacentElement('beforeend',div);
document.body.insertAdjacentElement('afterend',div);

// funcionan similar a los de arriba
document.body.insertAdjacentHTML('beforeend','<p>Hola mundo1</p>');
document.body.insertAdjacentText('beforeend','<p>Hola mundo1</p>');
