window.onload=pageLoad;
function pageLoad(){
	var contactForm = document.getElementById("contactForm");
	contactForm.onsubmit= validate;
}
function validate(){
	var check = true;
	var name = document.getElementById("custname").value;
	var lastname = document.getElementById("lname").value;
	var mail = document.getElementById("email").value;
	var phone = document.getElementById("telephone").value;
	var password = document.getElementById("password").value;

	
	if(name == ""){
		alert('Name is required !');
		check= false;
	}
	
	if(mail == ""){
		alert('E-mail is required !');
		check= false;
	}
	
	if(password == ""){
		alert('Password is required !');
		check= false;
	}
	
	if(lastname == ""){
		alert('last name is required !');
		check= false;
	}
	
	if (phone == "") {

		alert('Phone is required !');
	}
	

	if (!name.match(/^[A-Za-z ]+$/)){ //space------------------------------
		alert("only letters or space allowed in name field");
		check= false;
	}
	
	if (!mail.match(/^[a-zA-z0-9]+@[a-zA-Z]+\.[a-zA-Z]+$/)){
		alert("Email is Not Valid");
		check=false;
	}
	
	if (!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/)){
		alert("Password is Not Valid, It must contain 8 characters: 1 uppercase, one lowercase, one number and one special character at least");
		check=false;
	}
	
	if (!phone.match(/[0-9]{3}-[0-9]{3}-[0-9]{4}/)){
		//if (!phone.match(/^[0-9]{11}$/)){

		alert("Phone is not valid");
		check=false;
	}
	return check;
	
}
	 



