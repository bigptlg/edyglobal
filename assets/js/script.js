function toggleMenu() {
    const mobileNav = document.getElementById("mobile-nav");
    const menuIconLines = document.querySelectorAll("#menu-toggle-button span");

    mobileNav.classList.toggle("hidden");

    menuIconLines[0].classList.toggle("rotate-45");
    menuIconLines[0].classList.toggle("translate-y-[7px]");
    menuIconLines[1].classList.toggle("opacity-0");
    menuIconLines[2].classList.toggle("-rotate-45");
    menuIconLines[2].classList.toggle("-translate-y-[7px]");
}

document.addEventListener("DOMContentLoaded", function() {
    // --- Carrossel ---
    const imagensContainer = document.querySelector(".galeria .imagens");
    const imagens = document.querySelectorAll(".galeria .imagem");
    const totalImagens = imagens.length;
    let imagemAtual = 0;

    let carrosselIntervalId;

    function atualizaCarrossel() {
        if (totalImagens > 0) {
            const posicao = imagemAtual * -100 + "%";
            imagensContainer.style.transform = "translateX(" + posicao + ")";
        }
    }

    function startCarrosselInterval() {
        if (carrosselIntervalId) {
            clearInterval(carrosselIntervalId);
        }
        carrosselIntervalId = setInterval(proximo, 3000);
    }

    function proximo() {
        if (totalImagens > 0) {
            imagemAtual = (imagemAtual + 1) % totalImagens;
            atualizaCarrossel();
        }
    }

    function anterior() {
        if (totalImagens > 0) {
            imagemAtual = (imagemAtual - 1 + totalImagens) % totalImagens;
            atualizaCarrossel();
        }
    }

    const proximoBtn = document.getElementById("proximo");
    const anteriorBtn = document.getElementById("anterior");

    if (proximoBtn) {
        proximoBtn.addEventListener("click", () => {
            proximo();
            startCarrosselInterval();
        });
    }
    if (anteriorBtn) {
        anteriorBtn.addEventListener("click", () => {
            anterior();
            startCarrosselInterval();
        });
    }

    if (totalImagens > 1) {
        startCarrosselInterval();
        if (proximoBtn && anteriorBtn) {
             proximoBtn.classList.remove('hidden');
             anteriorBtn.classList.remove('hidden');
        }
    } else if (proximoBtn && anteriorBtn) {
        proximoBtn.classList.add('hidden');
        anteriorBtn.classList.add('hidden');
    }

    if (totalImagens > 0) {
        atualizaCarrossel();
    }

    const mobileNavLinks = document.querySelectorAll("#mobile-nav a");
    mobileNavLinks.forEach(link => {
        link.addEventListener("click", () => {
            const mobileNav = document.getElementById("mobile-nav");
            if (!mobileNav.classList.contains("hidden")) {
                toggleMenu();
            }
        });
    });
});
