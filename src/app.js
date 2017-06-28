const coinTicker = require('coin-ticker');

const getETH = async (element) => {
    const ethData = await coinTicker('coinbase', 'ETH_EUR');
    // console.log(ethData);
    // console.log(ethData.last);
    element.innerHTML = ethData.last;
    return "done"
}

document.addEventListener("DOMContentLoaded", function() {
    const ethElem = document.getElementById('eth-eur');
    let updater = setInterval(() => {
        getETH(ethElem);
    }, 1000);
});
