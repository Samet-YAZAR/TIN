
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

function validateName(name){
  var letters = /^[A-Za-z]+$/;
  return letters.test(name);
}

function validateEmail(email){
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

const email = document.getElementById('email');
const number = document.getElementById('phone');
const name = document.getElementsByClassName('name');
const okSubmit = document.getElementById('submit');
const myform = document.querySelector('.myTable');

okSubmit.addEventListener('click',function(e){
    e.preventDefault();
    const isValid = validateForm();
    if(isValid){
      const tr = WritetoTable(name, email, number);
      uppendRow(tr);
    }
});
function WritetoTable(name, email, number) {
    return`<tr>
          <td>${name[0].value}</td>
          <td>${name[1].value}</td>
          <td>${email.value}</td>
          <td>${phone.value}</td>

  </tr>`
}
function uppendRow(tr){
  myform.appendChild(tr);
}
