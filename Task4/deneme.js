
var yazar = {
  firstName:"Samet",
  lastName: "YAZAR",
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}
x = yazar.fullName();
document.getElementsByClassName('yzr').innerHTML = x;
