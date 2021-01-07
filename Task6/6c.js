
function validateForm(){
var result = true;

  if(!validateName(name[0].value)){
    document.getElementsByClassName("warningMessage")[0].style.display= "block";
    result = false;
  }
  if(!validateName(name[1].value)){
    document.getElementsByClassName("warningMessage")[1].style.display= "block";
    result = false;
  }
  if(!validateEmail(email.value)){
    document.getElementsByClassName("warningMessage")[2].style.display= "block";
    result = false;
  }
return result;
}

const email = document.getElementById('email');
const number = document.getElementById('phone');
const name = document.getElementsByClassName('name');
const okSubmit = document.getElementById('submit');


okSubmit.addEventListener('click',function(e){
    e.preventDefault();
    validateForm();
});

function validateName(name){
  var letters = /^[A-Za-z]+$/;
  return letters.test(name);
}

function validateEmail(email){
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}
