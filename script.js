let email=document.getElementById("email1");
let error=document.getElementById("error");
let password=document.getElementById("password");
let passlen=document.getElementById("passlen");
function validate(){

    let regexp=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
   
    if(regexp.test(email.value)){
        error.innerHTML="valid";
        error.style.color="green";
       

    }
    else{
        error.innerHTML="Invalid email id";
        error.style.color="red";
        

    }
}    

var email1=document.getElementById("email2");
function validate2(){

    let regexp=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
   
    if(regexp.test(email1.value)){
        error.innerHTML="valid";
        error.style.color="green";
       

    }
    else{
        error.innerHTML="Invalid email id";
        error.style.color="red";
        

    }
}    
     
function passwordChanged() {
    var patern = new RegExp("(?=.*\d)(?=.*[a-z])(?=.*[A-Z])");
    var strength = document.getElementById('strength');
    var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
    var mediumRegex = new RegExp("^(?=.{7,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
    var enoughRegex = new RegExp("(?=.{6,}).*", "g");
    
    var pwd = document.getElementById("password");
    if (pwd.value.length == 0) {
        strength.innerHTML = 'Password must contain atleast 8 characters including an uppercase, lowercase and number';
        alert("use capital,small letter and numericals in your password")
    }
    // else if(patern.test(pwd.value)){
    //     alert("use capital,small letter and numericals in your password")
    // }
    
    else if (false == enoughRegex.test(pwd.value)) {
        strength.innerHTML = 'More Characters';
    } else if (strongRegex.test(pwd.value)) {
        strength.innerHTML = '<span style="color:green">Strong!</span>';
        return true;
    } else if (mediumRegex.test(pwd.value)) {
        strength.innerHTML = '<span style="color:orange">Medium!</span>';
        
        function check(){
            return false;
        }
    } else {
        strength.innerHTML = '<span style="color:red">Weak!</span>';
        
        function check(){
            return false;
        }
    }
}

let phonenumber=document.getElementById("phoneno");
var phoneno = /^\d{10}$/;
var phoneno1= /^(\d{3}).(\d{3}).(\d{4})$/
var phoneno2= /^(\d{3})-(\d{3})-(\d{4})$/
var phoneno3= /^(\d{3}) (\d{3}) (\d{4})$/
function phoneval(){
    if(phoneno.test(phonenumber.value)){
       phonenum.innerHTML="valid";
       phonenum.style.color="Green"
    }
    else if(phoneno1.test(phonenumber.value)){
        phonenum.innerHTML="valid";
        phonenum.style.color="Green"
    }
    else if(phoneno2.test(phonenumber.value)){
        phonenum.innerHTML="valid";
        phonenum.style.color="Green"
    }
    else if(phoneno3.test(phonenumber.value)){
        phonenum.innerHTML="valid";
        phonenum.style.color="Green"
    }
    else{
        phonenum.innerHTML="Invalid";
        phonenum.style.color="red";
        alert("invalid phone number")
    }
}

let flname=document.getElementById("namef")
let fl1name=document.getElementById("namel")
function name1(){
    if(flname.value=="" || fl1name.value==""){
        alert("field cannot be empty")
        
        
    }
    
}
function check(){
    if(flname.value!="" && fl1name.value!="" && phonenumber.value!="" && (pwd.value.length!=0) && email.value!=""){
        return true;

    }
    else{
        alert("fill all the credentials");
        return false ;
        
    }
}

pwd2=document.getElementById("password2");

function check2(){
    if(email2.value!="" && pwd2.value.length!=0){
        return true;
    }
    else{
        return false;
    }
}
