//TODO: Adjust all pages, so that if localstorage fields are not initialized (meaning nobody is logged in), redirect to the login page

function check(form) { 
        require(['customer'], function (customer) {
	        var apikey = '2b1e849a3550bb6d0bd4ecdf4cc29abf';
	        helper(form, apikey, customer);	       
        });
}
            
function helper(form, apikey, customer){
			//Initialize form inputs
	 		var customerid = form.pswrd.value;
	        var firstname = form.fname.value;
	        var lastname = form.lname.value;
	        //Create a user object
	        var custObj = customer.initWithKey(apikey);
	        var user = custObj.getCustomerById(customerid);

	        if(user == undefined) //If that customer ID doesn't exist, alert the user
	        {
	        	alert("Incorrect Customer ID")
	        }

	        else
	        {
		        var userfname = user.first_name; 
		        var userlname = user.last_name;

		        if(firstname == userfname && lastname == userlname)
		        {
		        	window.localStorage.setItem('fname', userfname) //Store user data in localstorage
		        	window.localStorage.setItem('lname', userlname)
		        	window.localStorage.setItem('custid', customerid);

		        	window.location.assign('home.html') //Redirect to home page
		        }

		        else
		        {
		            alert("Error Username")/*displays error message*/
		        }
	         }
}            

