


function Student(firstName, lastName,id,grades){
    this.firstName = firstName;
    this.lastName = lastName;
    this.id = id;
    this.grades = grades;

    this.printFullName= function(){
       return this.firstName +" "+ this.lastName;
    }

    this.mean = function() {
      var total = grades.reduce(function (total, item) {
        	return total + item;
        });
    return total/(this.grades.length);
  }

    this.printGrade= function(){

          return this.firstName + this.lastName + " average of grades : " + this.mean() ;
    }
}

let student1 = new Student("Samet","Yazar",1,[1,2,3,4,5]);
