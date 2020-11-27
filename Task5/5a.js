var userOne= {
  name: "Samet",
  email:"yzr.samet@..",
	//login = function(){} or
	login(){
		console.log(this.email + "logged in ");
		//this in this curcle bracets refers to userOne object,
	},

	logout(){
	console.log(this.email +"logged out");
	}

	//here this refers to Window object.
};

 function printProperties(object) {
   for(let pName in object) {
     let property = object[pName];
     console.log("name : " + pName + "\nvalue : " + property + "\ntype : " + typeof property + "\n" );
   }
 }

printProperties(userOne);
