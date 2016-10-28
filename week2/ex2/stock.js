//The stock price starts at 10 dollars. 
//While the stock price is greater than or equal to 10, 
//confirm the new stock price. If the stock price falls 
//below 10 dollars, alert the user that they should sell! 
//Stop asking what the price is.

console.log('working!');

var stockprice = 10; 

while(stockprice >= 10) {
	alert(stockprice); 
	alert(stockprice = stockprice - 1);
    if(stockprice < 10){
      alert("You should stop selling!")
    }
} 
