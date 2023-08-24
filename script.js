document.getElementByClass("recargar").addEventListener("click", function() {
    location.reload();
});





// Obtén el elemento HTML donde deseas mostrar el precio
const precioElement = document.getElementById("precio-bitcoin");

// URL de la API de Binance para el precio de BTCUSDT
const apiUrl = "https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT";

// Realiza la solicitud a la API de Binance
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const precioBitcoin = parseFloat(data.price);
    precioElement.textContent = precioBitcoin.toFixed(2); // Muestra el precio con 2 decimales
  })
  .catch(error => {
    console.error("Error al obtener el precio de Bitcoin:", error);
  });
