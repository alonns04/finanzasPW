document.getElementsByClassName("recargar").addEventListener("click", function() {
    location.reload();
});




const apiUrl = "https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT";

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error("Error al obtener el precio de Bitcoin:", error);
  });
