// tu-archivo-js.js

const precioElement = document.getElementById("pb");

function obtenerPrecioBitcoin() {
    const apiUrl = "https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT";
    
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const precioBitcoin = parseFloat(data.price);
            precioElement.textContent = precioBitcoin.toFixed(2);
        })
        .catch(error => {
            console.error("Error al obtener el precio de Bitcoin:", error);
        });
}

// Obtener el precio inicial
obtenerPrecioBitcoin();

// Actualizar el precio cada 5 segundos (5000 milisegundos)
setInterval(obtenerPrecioBitcoin, 1500);
