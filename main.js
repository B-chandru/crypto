
var div = document.getElementById("contain");
var total = document.querySelector("#total");


fetch('https://api.coinlore.net/api/coin/markets/?id=90')
.then(response => response.json())
.then(quote =>quote.map(element => {
  for (const ele in element) {
  var a= `<div class="q1">
 <h1>${element.name}</h1>
 <div class="pic"><img src="img/bitcoin_PNG27-min.png" width="100px" height="100px">  </div>
 <div class="details">
 <h2>Base : <span>${element.base}</span></h2>
 <h2>Quote : <span>${element.quote}</span></h2>
 <h2>Rupees : <span>${element.price}</span></h2>
 <h2>USD : $<span>${element.price_usd}</span></h2>
 <h2> Time :<span>${element.time}</span></h2>
</div>`
  }

  div.insertAdjacentHTML('beforeend', a);
}))
.then(quote =>{
  total.innerHTML=quote.length;
})
.catch(err =>{
  console.log(err.message);
});



























