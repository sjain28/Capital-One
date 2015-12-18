$(function(){
    require(['bills'], function (bills) {
        var apikey = '2b1e849a3550bb6d0bd4ecdf4cc29abf';
        var customerid = localStorage.getItem('custid');
        showid(customerid);
    	addGraph(apikey, bills, customerid);
        });
});

var showid = function(customerid){
	var div = document.getElementById('acinfo');
	div.textContent = "Hi " + localStorage.getItem('fname')+ "! Your Account ID is: " + customerid;
}

var createCanvas=function(divName) {
			
	var div = document.getElementById(divName);
	var canvas = document.createElement('canvas');
	div.appendChild(canvas);
	if (typeof G_vmlCanvasManager != 'undefined') {
		canvas = G_vmlCanvasManager.initElement(canvas);
	}	
	var ctx = canvas.getContext("2d");
	return ctx;
}
		
var billPayees = function(apikey, bills, customerid){

	var dates = new Array();
	var billAccount = bills.initWithKey(apikey);
	var accountBills = billAccount.getAllByCustomerId(customerid);


	for(var i = 0; i < accountBills.length;i++){
		dates.push(accountBills[i].payee);
	}

	return dates;
}

var billAmounts = function(apikey, bills, customerid){

	var amounts = new Array();
	var billAccount = bills.initWithKey(apikey);
	var accountBills = billAccount.getAllByCustomerId(customerid);


	for(var i = 0; i < accountBills.length;i++){
		amounts.push((accountBills[i].payment_amount));
	}

	return amounts;
}

var addGraph = function(apikey, bills, customerid){
	var dates = billPayees(apikey, bills, customerid);
	var amounts = billAmounts(apikey, bills, customerid);
	var ctx = createCanvas("graph");
	var graph = new BarGraph(ctx);
	graph.maxValue = 300;
	graph.margin = 2;
	graph.colors = ["#49a0d8", "#d353a0", "#ffc527", "#df4c27"];
			
	graph.xAxisLabelArr = dates;
	setInterval(function () {
			graph.update(amounts)
			;}, 1000);

}			

