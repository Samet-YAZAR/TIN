
//constructor function

function student(firstName, lastName,id, grades){
    this.firstName = firstName;
    this.lastName = lastName;
    this.id = id;
    this.grade = grades;

    this.printFullName= function(){
       return this.firstName +" "+ this.lastName;
    }

    this.averageGrade = function(){
      //use Array iteration methods
          return this.grade.reduce((a, b) => (a + b)) / this.grade.length;  
    }
    this.printGrade= function(){
          console.log(firstName,lastName, "grades average:", this.averageGrade);
    }
}

}
let student = new Student("Samet","Yazar",1,[1,2,3,4,5]);
student.printGrade();
