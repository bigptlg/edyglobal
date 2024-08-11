    function menu() {
        document.querySelector("#menu").classList.toggle("menu")
    }

document.addEventListener("DOMContentLoaded", function() {


    var imagens = document.querySelectorAll(".carrossel .imagem");
    var numeroImg= imagens.length;
    var numero = 0;

    function proximo() {
        numero++;
        if (numero == numeroImg) {
            numero = 0;
        }
        const posicao = numero * -100;
        imagens.forEach(function(imagem) {
            imagem.style.transform = `translateX(${posicao}%)`;
        });
    }

    function anterior() {
        numero--;
        if (numero == -1) {
            numero = numeroImg - 1;
        }
        const posicao = numero * -100;
        imagens.forEach(function(imagem) {
            imagem.style.transform = `translateX(${posicao}%)`;
        });
    }

    document.querySelector("#anteriorBtn").addEventListener('click', anterior);
    document.querySelector("#proximoBtn").addEventListener('click', proximo);

    function iniciarIntervalo() {
        intervalo = setInterval(proximo, 3000);
    }

    function pararIntervalo() {
        clearInterval(intervalo);
    }

    var carrossel = document.querySelector('.carrossel');
    /*carrossel.addEventListener('mouseenter', pararIntervalo);
    carrossel.addEventListener('mouseleave', iniciarIntervalo);*/

    iniciarIntervalo();
});
