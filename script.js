// tu-archivo-js.js

const bitcoinE = document.getElementById("btc");

function obtenerPrecioBitcoin() {
    const apiUrl = "https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT";
    
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const precioBitcoin = parseFloat(data.price);
            bitcoinE.textContent = precioBitcoin.toFixed(2);
        })
        .catch(error => {
            console.error("Error al obtener el precio de Bitcoin:", error);
        });
}
const ethereumE = document.getElementById("eth")

function obtenerPrecioEthereum() {
    const apiUrl = "https://api.binance.com/api/v3/ticker/price?symbol=ETHUSDT";
    
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const precioEthereum = parseFloat(data.price);
            ethereumE.textContent = precioEthereum.toFixed(2);
        })
        .catch(error => {
            console.error("Error al obtener el precio de Ethereum:", error);
        });
}

const bnbE = document.getElementById("bnb")

function obtenerPrecioBNB() {
    const apiUrl = "https://api.binance.com/api/v3/ticker/price?symbol=BNBUSDT";
    
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const precioBNB = parseFloat(data.price);
            bnbE.textContent = precioBNB.toFixed(2);
        })
        .catch(error => {
            console.error("Error al obtener el precio de BNB:", error);
        });
}

const usdtarsE = document.getElementById("usdtars")

function obtenerPrecioUSDTARS() {
    const apiUrl = "https://api.binance.com/api/v3/ticker/price?symbol=USDTARS";
    
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const precioUSDTARS = parseFloat(data.price);
            usdtarsE.textContent = precioUSDTARS.toFixed(2);
        })
        .catch(error => {
            console.error("Error al obtener el precio de USDT - ARS:", error);
        });
}

const solE = document.getElementById("sol")

function obtenerPrecioSOL() {
    const apiUrl = "https://api.binance.com/api/v3/ticker/price?symbol=SOLUSDT";
    
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const precioSOL = parseFloat(data.price);
            solE.textContent = precioSOL.toFixed(2);
        })
        .catch(error => {
            console.error("Error al obtener el precio de SOL", error);
        });
}


const dogeE = document.getElementById("doge")

function obtenerPrecioDOGE() {
    const apiUrl = "https://api.binance.com/api/v3/ticker/price?symbol=DOGEUSDT";
    
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const precioDOGE = parseFloat(data.price);
            dogeE.textContent = precioDOGE.toFixed(4);
        })
        .catch(error => {
            console.error("Error al obtener el precio de DOGE", error);
        });
}

const xrpE = document.getElementById("xrp")

function obtenerPrecioXRP() {
    const apiUrl = "https://api.binance.com/api/v3/ticker/price?symbol=XRPUSDT";
    
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const precioXRP = parseFloat(data.price);
            xrpE.textContent = precioXRP.toFixed(4);
        })
        .catch(error => {
            console.error("Error al obtener el precio de XRP", error);
        });
}

const adaE = document.getElementById("ada")

function obtenerPrecioADA() {
    const apiUrl = "https://api.binance.com/api/v3/ticker/price?symbol=ADAUSDT";
    
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const precioADA = parseFloat(data.price);
            adaE.textContent = precioADA.toFixed(4);
        })
        .catch(error => {
            console.error("Error al obtener el precio de ADA", error);
        });
}


const trxE = document.getElementById("tron")

function obtenerPrecioTRX() {
    const apiUrl = "https://api.binance.com/api/v3/ticker/price?symbol=TRXUSDT";
    
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const precioTRX = parseFloat(data.price);
            trxE.textContent = precioTRX.toFixed(4);
        })
        .catch(error => {
            console.error("Error al obtener el precio de TRX", error);
        });
}


obtenerPrecioEthereum();
obtenerPrecioBitcoin();
obtenerPrecioBNB();
obtenerPrecioSOL();
obtenerPrecioUSDTARS();
obtenerPrecioDOGE();
obtenerPrecioXRP();
obtenerPrecioADA();
obtenerPrecioTRX();
setInterval(obtenerPrecioTRX, 4000);
setInterval(obtenerPrecioADA, 4000);
setInterval(obtenerPrecioXRP, 4000);
setInterval(obtenerPrecioDOGE, 4000);
setInterval(obtenerPrecioSOL, 4000);
setInterval(obtenerPrecioUSDTARS, 4000);
setInterval(obtenerPrecioBNB, 1500);
setInterval(obtenerPrecioEthereum, 1500);
setInterval(obtenerPrecioBitcoin, 1500);