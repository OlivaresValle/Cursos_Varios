function Select(){}
Select.prototype.render = function (){
    console.log('renderizando select')
}

function Checkbox(){}
Checkbox.prototype.render = function (){
    console.log('renderizando Checbox')
}

let componentes = [
    new Select(),
    new Checkbox(),
];

componentes.forEach( c=> c.render());