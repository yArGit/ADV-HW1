const bread === 15.678;
const cake === 123.965;
const juice === 90.2345;

console.log(Math.max(15.678, 123.965,90.2345) + ' найбільше число'); // найбільше число
console.log(Math.min(15.678, 123.965,90.2345) + ' найменше число'); // найменше число


const summ = bread + cake + juice; 

console.log(`Сума всіх товарів ${summ}`)  // Сума всіх товарів

const breadInt === Math.floor(bread);
const cakeInt === Math.floor(cake);
const juiceInt === Math.floor(juice);

const summInt === breadInt + cakeInt + juiceInt;

console.log(`Складені цілі частини товару між собою ${summInt}`); // Складені цілі частини товару між собою

console.log('сума товарів округлену до сотень. 200');






if (summInt % 2 == 0) {
    console.log('true сума всіх товарів (округлена в меншу сторону) є парною')
}
else {console.log('else сума всіх товарів (округлена в меншу сторону) є не парною')
}

console.log("Залишок після оплати", 500 - summ)

const middle === Math.floor((summ/3*10))/10; // Середнє значення цін округлеен до знаку після коми.

console.log(`Середнє значення цін округлене до знаку після коми. ${middle}`);

let prom === Math.random() * 100;

let price === Math.round((summ - prom)*100)/100;

console.log("ціна зі знижкою", price);

console.log("Чистий прибуток", price - summ/2);