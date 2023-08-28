const ethE = document.getElementById("eth");
const bnbE = document.getElementById("bnb");
const solE = document.getElementById("sol");
const dogeE = document.getElementById("doge");
const xrpE = document.getElementById("xrp");
const btcE = document.getElementById("btc");
const adaE = document.getElementById("ada");
const trxE = document.getElementById("tron");
const dotE = document.getElementById("dot");
const daiE = document.getElementById("dai");
const maticE = document.getElementById("matic");
const ltcE = document.getElementById("ltc");
const wbtcE = document.getElementById("wbtc");
const bchE = document.getElementById("bch");
const avaxE = document.getElementById("avax");
const linkE = document.getElementById("link");
const xmrE = document.getElementById("xmr");

function obtenerPrecioCriptomoneda(symbol, element) {
    const apiUrl = `https://api.binance.com/api/v3/ticker/price?symbol=${symbol}USDT`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const precioCriptomoneda = parseFloat(data.price);
            const precioFinal = precioCriptomoneda > 9.99 ? precioCriptomoneda.toFixed(2) : precioCriptomoneda.toFixed(4);
            element.textContent = `$ ${precioFinal}`;
        })
        .catch(error => {
            console.error(`Error al obtener el precio de ${symbol}`, error);
        });
}

function actualizarPrecios() {
    obtenerPrecioCriptomoneda("BTC", btcE);
    obtenerPrecioCriptomoneda("ETH", ethE);
    obtenerPrecioCriptomoneda("BNB", bnbE);
    obtenerPrecioCriptomoneda("SOL", solE);
    obtenerPrecioCriptomoneda("DOGE", dogeE);
    obtenerPrecioCriptomoneda("XRP", xrpE);
    obtenerPrecioCriptomoneda("ADA", adaE);
    obtenerPrecioCriptomoneda("TRX", trxE);
    obtenerPrecioCriptomoneda("DOT", dotE);
    obtenerPrecioCriptomoneda("DAI", daiE);
    obtenerPrecioCriptomoneda("MATIC", maticE);
    obtenerPrecioCriptomoneda("LTC", ltcE);
    obtenerPrecioCriptomoneda("WBTC", wbtcE);
    obtenerPrecioCriptomoneda("BCH", bchE);
    obtenerPrecioCriptomoneda("AVAX", avaxE);
    obtenerPrecioCriptomoneda("LINK", linkE);
    obtenerPrecioCriptomoneda("XMR", xmrE);
}

setInterval(actualizarPrecios, 2000);


const usdtarsE = document.getElementById("usdtars")