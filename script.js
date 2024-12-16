document.querySelector('.download-button').addEventListener('click', function(e) {
    alert('¡Gracias por descargar CheckApp!');
    // Permitir la descarga del archivo
});


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

document.addEventListener("DOMContentLoaded", function () {
    // Selecciona el elemento canvas
    const qrContainer = document.getElementById("qr-code");

    // URL de tu APK
    const appUrl = "https://antena19.github.io/PaginaWebCheckApp/app-release.apk";

    // Genera el código QR en el canvas
    QRCode.toCanvas(qrContainer, appUrl, {
        width: 300, // Ajusta el ancho del QR (más grande que el valor predeterminado)
        margin: 2, // Margen alrededor del QR
        color: {
            dark: "#42316c", // Color del QR
            light: "#ffffff", // Color de fondo
        },      
        
    }, function (error) {
        if (error) {
            console.error("Error generando el QR:", error);
        } else {
            console.log("QR generado correctamente.");
        }
    });
});




