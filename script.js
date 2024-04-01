let api =
  "https://v6.exchangerate-api.com/v6/ca9e170c0d3f9a6251c66091/latest/USD";
const fromdropdown = document.getElementById("from");
const todropdown = document.getElementById("to");
currencies = ["USD","AED","AFN","ALL","AMD","ANG","AOA","ARS","AUD","AWG","AZN","BAM","BBD","BDT","BGN","BHD","BIF","BMD","BND","BOB","BRL","BSD","BTN","BWP","BYN","BZD","CAD","CDF","CHF","CLP","CNY","COP","CRC","CUP","CVE","CZK","DJF","DKK","DOP","DZD","EGP",
  "ERN","ETB","EUR","FJD","FKP","FOK","GBP","GEL","GGP","GHS","GIP","GMD","GNF","GTQ","GYD","HKD","HNL","HRK","HTG","HUF","IDR","ILS","IMP","INR","IQD","IRR","ISK","JEP","JMD","JOD","JPY",
  "KES","KGS","KHR","KID","KMF","KRW","KWD","KYD","KZT","LAK","LBP","LKR","LRD","LSL","LYD","MAD","MDL","MGA","MKD","MMK","MNT","MOP","MRU","MUR","MVR","MWK","MXN","MYR","MZN","NAD","NGN","NIO","NOK","NPR","NZD","OMR","PAB","PEN","PGK","PHP","PKR","PLN","PYG","QAR",
  "RON","RSD","RUB","RWF",
  "SAR",
  "SBD",
  "SCR",
  "SDG",
  "SEK",
  "SGD",
  "SHP",
  "SLE",
  "SLL",
  "SOS",
  "SRD",
  "SSP",
  "STN",
  "SYP",
  "SZL",
  "THB",
  "TJS",
  "TMT",
  "TND",
  "TOP",
  "TRY",
  "TTD",
  "TVD",
  "TWD",
  "TZS",
  "UAH",
  "UGX",
  "UYU",
  "UZS",
  "VES",
  "VND",
  "VUV",
  "WST",
  "XAF",
  "XCD",
  "XDR",
  "XOF",
  "XPF",
  "YER",
  "ZAR",
  "ZMW",
  "ZWL",
];
currencies.forEach((currency) => {
    const option = document.createElement("option");
    option.value = currency;
    option.text = currency;
    fromdropdown.add(option);
});
currencies.forEach((currency) => {
    const option = document.createElement("option");
    option.value = currency;
    option.text = currency;
    todropdown.add(option);
});
fromdropdown.value="USD";
todropdown.value="INR";
let converbutt = document.getElementById("convert")
let result = document.getElementById("result")
let convertCurrency = ()=>{
  const amount = document.getElementById("amount").value
  const fromcurrency = fromdropdown.value
  const tocurrency = todropdown.value

  if(amount.length != 0){
    fetch(api).then((resp)=>{
      return resp.json()
    }).then((data)=>{
      let fromexchangerate = data.conversion_rates[fromcurrency]
      let toexchangerate = data.conversion_rates[tocurrency]
      let convertedamount = (amount / fromexchangerate)*toexchangerate
      result.innerHTML = `${amount} ${fromcurrency} = ${convertedamount} ${tocurrency}`
    })
  }
  else{
    alert("Please enter some amount")
  }
}
converbutt.addEventListener('click',convertCurrency)