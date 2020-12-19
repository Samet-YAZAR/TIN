
function validate()


function emailIsValid (email) {
  return /\S+@\S+\.\S+/.test(email)
}

function numberValid(){
    var z = document.forms["myForm"]["num"].value;
    if(!z.match(/^\d+/)) {
        alert("Please only enter numeric characters only for your phone! (Allowed input:0-9)")
        return false;
        }
    return true;
}
