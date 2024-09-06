const videoUrl = "https://www.youtube.com/embed/-_7TNA4RnH0";
        
// Seleciona o elemento com a classe 'video'
const videoDiv = document.querySelector('#video');

// Cria um iframe para incorporar o vídeo
const iframe = document.createElement('iframe');
iframe.src = videoUrl;
iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
iframe.allowFullscreen = true;

// Adiciona o iframe dentro da div com a classe 'video'
videoDiv.appendChild(iframe);