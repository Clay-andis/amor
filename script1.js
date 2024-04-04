// Variables de control
let isEarlyClick = false;
let timeoutIds = [];

// ...

// Mostrar el gif inicial después de 0 segundos


let yesButtonGrowing = false;
let mouseInsideNoBtn = false;

document.getElementById('noBtn').addEventListener('mouseenter', function() {
    mouseInsideNoBtn = true;
    growYesButton(0, 1); // Comienza el crecimiento del botón "Sí" con un retraso de 0 segundos
});

document.getElementById('noBtn').addEventListener('mouseleave', function() {
    mouseInsideNoBtn = false;
});

function growYesButton(currentTime, growthFactor) {
    if (!mouseInsideNoBtn || currentTime >= 10) {
        return;
    }

    let siBtn = document.getElementById('siBtn');
    let initialWidth = siBtn.offsetWidth;
    let initialHeight = siBtn.offsetHeight;
    let initialFontSize = parseFloat(window.getComputedStyle(siBtn).fontSize);

    siBtn.style.transition = 'width 0.5s, height 0.5s, font-size 0.5s';
    siBtn.style.width = (initialWidth * growthFactor) + 'px';
    siBtn.style.height = (initialHeight * growthFactor) + 'px';
    siBtn.style.fontSize = (initialFontSize * growthFactor) + 'px';

    setTimeout(function() {
        growYesButton(currentTime + 2, growthFactor + 0.1); // Llama recursivamente para aumentar el tamaño del botón "Sí" cada 2 segundos
    }, 1000);
}






let noButtonMoving = false; 


document.getElementById('noBtn').addEventListener('mouseenter', function() {

    if (noButtonMoving) {
        return;
    }

    noButtonMoving = true;

    // Deshabilitar temporalmente el clic en el botón
    document.getElementById('noBtn').classList.add('disabled');

   
    var posX = Math.random() * (window.innerWidth - 200); 
    var posY = Math.random() * (window.innerHeight - 50); 

    // Establecer las nuevas posiciones del botón con animación
    document.getElementById('noBtn').style.position = 'absolute';
    document.getElementById('noBtn').style.transition = 'all 0.5s'; 
    document.getElementById('noBtn').style.left = posX + 'px';
    document.getElementById('noBtn').style.top = posY + 'px';


    setTimeout(function() {
        noButtonMoving = false; // Restablecer la variable de estado después de la animación
        document.getElementById('noBtn').classList.remove('disabled'); // Habilitar clic en el botón
    }, 500); // Ajusta este valor según la duración de tu animación CSS
});


