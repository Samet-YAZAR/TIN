// Object initializer

let person = {
  firstName:'Samet',
  lastName: 'YAZAR',
  dateofBirth : "1996/03/25",
  age : function() {
      var birth =this.dateofBirth.split('-');
      // Please pay attention to the month (parts[1]); JavaScript counts months from 0:
      // January - 0, February - 1, etc.
      let today = new Date().toISOString().slice(0, 10);
      return today[0]-birth[0];
  },

  adulthood : function () {
    return  (age > 18 ? "Adult": "Child");
  }

}
 function printProperties(object) {
   for(let pName in object) {
     let property = object[pName];
     console.log("name" + pName + "\nvalue" + property + "\ntype" + typeof property + "\n" );
   }
 }
