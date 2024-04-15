const rates = {}
// елементы для отображения курсов валют
const elementUSD = document.querySelector('[data-value="USD"]');
const elementEUR = document.querySelector('[data-value="EUR"]');
const elementBTC = document.querySelector('[data-value="BTC"]');
// елементы форми, ввод суми, выбор валюти, поле с результатом
const input = document.querySelector('#input');
const result = document.querySelector('#result');
const select = document.querySelector('#select');

//функция получения курса валют и отображения их на странице
async function getCurrencies() {
   const response = await fetch('https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11');
   const data = await response.json();
   const result = data;
   console.log(result);


   rates.usd = result[0].buy;
   rates.eur = result[1].buy;
   rates.btc = result[3].buy;

   elementUSD.textContent = rates.usd;
   elementEUR.textContent = rates.eur;
   elementBTC.textContent = rates.btc;
}

getCurrencies()
// слушаем изминения в текстовом поле и в select
input.oninput = convertValue;
select.oninput = convertValue;

input.oninput = function () {
   console.log('chench!');
   result.value = (input.value / rates.usd)
   result.value = (input.value / rates.eur)

}

