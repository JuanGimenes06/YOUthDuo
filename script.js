let imgIndice = 0;

const IMAGENS = ['img/imagem1.png', 'img/imagem2.png'];
const prevButton = document.getElementById('anterior');
const nextButton = document.getElementById('proximo');
var IMG = document.getElementById('carrosselImagem');

// Função para carregar a imagem com animação fade
function carregar() {
    IMG.style.opacity = 0; // Inicia a transição (fade-out)
    setTimeout(() => {
        IMG.style.backgroundImage = `url(${IMAGENS[imgIndice]})`;
        IMG.style.opacity = 1; // Conclui a transição (fade-in)
    }, 500); // Tempo de espera para a transição
}

// Função para mudar para a imagem anterior
prevButton.addEventListener('click', () => {
    if (imgIndice > 0) {
        --imgIndice;
    } else {
        imgIndice = IMAGENS.length - 1;
    }
    carregar();
});

// Função para mudar para a próxima imagem
nextButton.addEventListener('click', () => {
    var limite = IMAGENS.length - 1;
    if (imgIndice < limite) {
        ++imgIndice;
    } else {
        imgIndice = 0;
    }
    carregar();
});

// Função para avançar automaticamente para a próxima imagem
function autoAvancar() {
    var limite = IMAGENS.length - 1;
    if (imgIndice < limite) {
        ++imgIndice;
    } else {
        imgIndice = 0;
    }
    carregar();
}



// setInterval(autoAvancar, 3000);

carregar();
