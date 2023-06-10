const priceEl = document.getElementById("price");
const calcEl = document.getElementById("calc");
const resultEl = document.getElementById("result");
calcEl.addEventListener("click",priceF);
function priceF(){
	let price = priceEl.value;
	if(price === ""){
		alert("Please Enter The Value");
	}else{
		const total = getTotal(price);
		resultEl.innerText =`Total : ${total.toFixed(2)}`};
	};
function getTotal(price){
	price *= 1.12;
	price *= 1.14;
	return price;
};
