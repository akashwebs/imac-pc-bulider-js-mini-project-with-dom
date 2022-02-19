// common function for id
const getId = idname => document.getElementById(idname);
// common functon for get text value with parseFloat
const getTextValue = idName => {
        return parseFloat(getId(idName).innerText);
    }
    // get button price and set in the calculation box and total all
const onClick = (btnId, showId, price) => getId(btnId).addEventListener('click', () => {
    getId(showId).innerText = price;
    const bestPrice = getTextValue('best-price') + getTextValue('memory-cost') + getTextValue('storage-cost') + getTextValue('delivery-cost');
    getId('total-price').innerText = bestPrice;
})

onClick('eightGB', 'memory-cost', 450)
onClick('sixteenGB', 'memory-cost', 1250)
onClick('ssd1', 'storage-cost', 3350)
onClick('ssd2', 'storage-cost', 4500)
onClick('ssd3', 'storage-cost', 5050)
onClick('free-delivery', 'delivery-cost', 0)
onClick('paid-delivery', 'delivery-cost', 120)

// cuppon
getId('apply-btn').addEventListener('click', () => {
    const promo = getId('promo-input').value;
    const offerPromo = "fake";
    if (promo == offerPromo) {
        const percent = (getTextValue('total-price') - (getTextValue('total-price') * .2)).toFixed(2);
        getId('total-price').innerText = percent
    }
})