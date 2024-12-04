
document.addEventListener("DOMContentLoaded", function() {
    // Efecto de pulsación para el logo
    const logo = document.querySelector('.app-logo');
    setInterval(() => {
        logo.classList.add('pulse');
        setTimeout(() => logo.classList.remove('pulse'), 1000);
    }, 5000); // El logo pulsará cada 5 segundos

    // Efecto de salto en el botón de descarga
    const downloadButton = document.querySelector('.download-button');
    downloadButton.addEventListener('mouseenter', () => {
        downloadButton.classList.add('bounce');
    });

    downloadButton.addEventListener('mouseleave', () => {
        downloadButton.classList.remove('bounce');
    });

    // Efecto de rotación en las tarjetas
    const cards = document.querySelectorAll('.feature-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.classList.add('rotate');
        });
        card.addEventListener('mouseleave', () => {
            card.classList.remove('rotate');
        });
    });
});

