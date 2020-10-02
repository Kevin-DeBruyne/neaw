function numberValidation() { 
    var n = document.form.numbers.value; 
    if (isNaN(n)) { 
        alert("please enter valid phone number") 
        return false; 
    } 
    else if(phone_number.value.length!=10){
        alert('please enter a valid phone number')
    }
  
     
    else { 
        document.getElementById( 
        "numberText").innerHTML = 
        "Numeric value is: " + n; 
        return true; 
    } 
} 
function ValidateEmail(inputText)
{
var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
if(inputText.value.match(mailformat))
{
return true;
}

else
{
alert("You have entered an invalid email address!");
document.form.email.focus();
return false;
}
}
function zero_check(){
    var x = document.getElementById("phone_number").value[0];
    if(x=="0"){
        alert('please enter a valid phone number')
    }
    else{
        return true;
    }


}



