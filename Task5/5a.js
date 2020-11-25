//

let player = {
  firstName:'Samet',
  lastName: 'YAZAR',
  dateofBirth : new Date("1996/03/25"),
  age : function() {
      var currentDate = new Date();
     return currentDate.getFullYear() - dateofBirth.getFullYear();
  },

  adulthood : function () {
    return  (this.age > 18 ? "Adult": "Child");
  }

}
 function printProperties(object) {
   for(let pName in object) {
     let property = object[pName];
     console.log("name : " + pName + "\nvalue : " + property + "\ntype : " + typeof property + "\n" );
   }
 }
printProperties(player);
