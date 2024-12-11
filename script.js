document.addEventListener('DOMContentLoaded', function() {
    const pantalla = document.querySelector('.pantalla');
    const botones = document.querySelectorAll('.btn');
    let operacionActual = '';
    let operacionPendiente = '';

    botones.forEach(boton => {
        boton.addEventListener('click', function() {
            const botonTexto = boton.textContent;

            if (botonTexto === 'C') {
                operacionActual = '';
                operacionPendiente = '';
                pantalla.textContent = '0';
            } else if (botonTexto === '←') {
                operacionActual = operacionActual.slice(0, -1);
                pantalla.textContent = operacionActual || '0';
            } else if (botonTexto === '=') {
                try {
                    operacionPendiente = eval(operacionActual);
                    pantalla.textContent = operacionPendiente;
                    operacionActual = operacionPendiente.toString();
                } catch (error) {
                    pantalla.textContent = 'Error';
                    operacionActual = '';
                }
            } else {
                if (pantalla.textContent === '0' && botonTexto !== '.') {
                    operacionActual = botonTexto;
                } else {
                    operacionActual += botonTexto;
                }
                pantalla.textContent = operacionActual;
            }
        });
    });
});
