// const somar = (a, b) => {
//     return a + b;
// }
// botao.onclick = () => {
    // somar(1, 2);
// }

// botao.onclick = function { }

// const botao = document.querySelector('button');

// const rodarQuadrado = (event) => {
//     console.log(event);

// };

// botao.onclick = rodarQuadrado;

// const botao = document.querySelector('button');

// const rodarQuadrado = (event) => {
//     console.log(event.target);

// };

// botao.onclick = rodarQuadrado;

const botao = document.querySelector('.botao-radar');
const menuHumburguer = document.querySelector('.menu-humburguer');
const quadrado = document.querySelector('.quadrado');
const navMobile = document.querySelector('.nav-mobile');

const navMobile.classList.toggle('visivel');

const rodarQuadrado = () => {
    quadrado.classList.toggle('rodando');
};
menuHumburguer.onclick = alterarNavMobile;
botao.onclick = rodarQuadrado;

let inputEmail = document.querySelector('input');

inputEmail.onchange = (event) => {
    if (event.target.value.includes('.com')) {
        console.log('e valido')
    }
    else {
        console.log('Nem é');
    }
}