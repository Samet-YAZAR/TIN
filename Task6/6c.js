
function validateForm(){

  if(!validateName(name[0].value)){
    document.getElementsByClassName("warningMessage")[0].style.display= "block";
  }
  if(!validateName(name[1].value)){
    document.getElementsByClassName("warningMessage")[1].style.display= "block";
  }
  if(!validateEmail(email.value)){
    document.getElementsByClassName("warningMessage")[2].style.display= "block";
  }
  alert(validateName(name[0].value));
  alert(validateName(name[1].value));
  alert(validateName(email.value));
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
