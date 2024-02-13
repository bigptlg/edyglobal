function menu() {
    document.querySelector("#menu").classList.toggle("menu")
}


document.addEventListener("DOMContentLoaded", function() {
    var total = document.querySelectorAll(".imagem").length;
    var imagem = 0;

    function proximo() {
        imagem = (imagem + 1) % 4;
        atualiza();
    }

    function anterior() {
        imagem = (imagem - 1 + 4) % 4;
        atualiza();
    }

    function atualiza() {
        var posicao = imagem * -100 + "%";
        document.querySelector(".imagens").style.transform = "translateX(" + posicao + ")";
    }

    document.getElementById("proximo").addEventListener("click", proximo);
    document.getElementById("anterior").addEventListener("click", anterior);

    setInterval(proximo, 3000);
});
