


function Student(firstName, lastName,id,grades){
    this.firstName = firstName;
    this.lastName = lastName;
    this.id = id;
    this.grades = grades;

    this.printFullName= function(){
       return this.firstName +" "+ this.lastName;
    };

    this.averageGrade = function(){
      //use Array iteration methods
          return 34;
    }

    this.printGrade= function(){
          console.log(firstName,lastName, "grades average:", this.averageGrade);
    }
}

let student1 = new Student("Samet","Yazar",1,[1,2,3,4,5]);
student1.printGrade();
