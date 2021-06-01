function computeLoan(){
	var amount = document.getElementById('amount').value;
	var interest_rate = document.getElementById('interest_rate').value;
	var months = document.getElementById('months').value;
	//var interest = (amount * (interest_rate * .01)) / months;  //I=PR/T100    payment=P/T + PR/T100   R=I100/PT
   // var payment = ((amount / months) + interest).toFixed(2);

    var interest =  amount * interest_rate * months * .01;
    interest = interest.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    
    var totalAmountToPay = amount + (interest_rate * months)
	totalAmountToPay = totalAmountToPay.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	
    document.getElementById('interest').innerHTML = "Interest Amount = $"+interest;
    document.getElementById('totalAmountToPay').innerHTML = "Total Amount  to pay= $"+totalAmountToPay ;
    
}