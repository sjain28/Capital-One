$(function(){
    require(['bills'], function (bills) {
    	billModule = bills;
        var apikey = '2b1e849a3550bb6d0bd4ecdf4cc29abf';
        billsDemo(apikey, bills);
        dummy();
        });
});


var billsDemo = function(apikey, bills) {
	
	var billAccount = bills.initWithKey(apikey);

	var retBills = billAccount.getAllByCustomerId("56241a12de4bf40b17112014");

	var ids = "";

	for(var i = 0; i < retBills.length; i++)
	{
		ids += retBills[i].payee + "        ";
	}
	document.getElementById("demo").innerHTML = ids;
		document.getElementById("sample").innerHTML = ids;


	console.log("Another test");

}

var dummy = function() {
	console.log("Tester");
}

