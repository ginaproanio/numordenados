// Seleccionar elementos del DOM
var cantidadInput = document.getElementById('cantidad');
var numerosInputDiv = document.getElementById('numerosInput');
var numeroInput = document.getElementById('numero');
var numerosIngresadosElement = document.getElementById('numerosIngresados');
var numerosOrdenadosElement = document.getElementById('numerosOrdenados');
var reiniciarBtn = document.getElementById('reiniciarBtn');  // El botón de reiniciar

// Variables para manejar la cantidad y los números
var cantidad;
var numeros = [];

// Detectar el cambio en el campo de cantidad y empezar a pedir los números
cantidadInput.addEventListener('input', function() {
    cantidad = parseInt(cantidadInput.value, 10);

    // Validar que la cantidad sea un número positivo mayor que 0
    if (isNaN(cantidad) || cantidad <= 0) {
        numerosInputDiv.style.display = 'none';
    } else {
        numerosInputDiv.style.display = 'block';
        numeroInput.focus();  // Poner el foco en el campo de número
    }
});

// Función para agregar un número al arreglo
function agregarNumero() {
    var numero = parseInt(numeroInput.value, 10);

    // Validar que el número sea un número válido
    if (isNaN(numero)) {
        alert('Por favor, ingresa un número válido.');
        return;
    }

    // Agregar el número al arreglo
    numeros.push(numero);
    numeroInput.value = '';  // Limpiar el campo de entrada del número
    numeroInput.focus();  // Mantener el foco en el campo de número

    // Mostrar los números ingresados en la página
    mostrarNumerosIngresados();

    // Si ya se ingresaron todos los números, ordenar y mostrar el resultado
    if (numeros.length === cantidad) {
        mostrarResultado();
    }
}

// Detectar cuando se presiona Enter en el campo de número
numeroInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        agregarNumero();
    }
});

// Función para mostrar los números ingresados en la página
function mostrarNumerosIngresados() {
    numerosIngresadosElement.textContent = numeros.join(', ');
}

// Función para mostrar el resultado ordenado
function mostrarResultado() {
    var numerosOrdenados = [...numeros].sort((a, b) => a - b);
    numerosOrdenadosElement.textContent = numerosOrdenados.join(', ');

    // Mostrar el botón de reiniciar y agregar clase para iluminar
    reiniciarBtn.style.display = 'block';
    reiniciarBtn.classList.add('activo'); // Agregar la clase que ilumina el botón
    
    // Quitar el foco del input de número
    numeroInput.blur(); 
}

// Función para reiniciar el proceso
reiniciarBtn.addEventListener('click', function() {
    resetear(); // Llamar a la función que reinicia el proceso
});

// Función para resetear la interfaz y empezar de nuevo
function resetear() {
    cantidadInput.value = '';
    numeroInput.value = '';
    numeros = [];
    numerosInputDiv.style.display = 'none';
    numerosIngresadosElement.textContent = '';
    numerosOrdenadosElement.textContent = '';
    reiniciarBtn.style.display = 'none';  // Ocultar el botón de reiniciar
    reiniciarBtn.classList.remove('activo');  // Quitar el estilo iluminado
    cantidadInput.focus();  // Devolver el foco al campo de cantidad
}
