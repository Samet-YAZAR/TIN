
let player = {
  firstName:'Samet',
  lastName: 'YAZAR',
  dateofBirth : new Date("1996/03/25"),
  age() {
      var currentDate = new Date();
      var cr = currentDate.getFullYear();
      var d = this.dateofBirth.getFullYear();
      return (cr-d);
  },

  adulthood() {
    return  this.age > 18 ? "Adult": "Child" ;
  }

 function printProperties(object) {
   for(let pName in object) {
     let property = object[pName];
     console.log("name : " + pName + "\nvalue : " + property + "\ntype : " + typeof property + "\n" );
   }
 }

printProperties(userOne);
