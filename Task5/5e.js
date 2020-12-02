
// Using classes
class Student {
  constructor(firstName, lastName, id, grades) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.id = id;
      this.grades = grades;
  }

  get fullName() {
      return this.firstName + " " + this.lastName;
  }

  set fullName(name) {
      let parts = name.split(' ');
      if (parts.length !== 2) throw "The full name consists of two fords: firstname and lastname.";
      this.firstName = parts[0];
      this.lastName = parts[1];
  }

  get averageGrade() {
    var sum = 0;
    if (this.grades.length === 0)
        return 0;
    for( var i = 0; i < this.grades.length; i++ ){
        sum += parseInt( this.grades[i], 10 ); //10 stands for decimals
    }
    return (sum/this.grades.length);
  }

  PrintInfo() {
      console.log(this.fullName, "grades average:", this.averageGrade);
  }
}

let student = new Student("Samet", "YAZAR", 1, [1, 2, 3, 4, 5]);
student.PrintInfo();
student.fullName = "Salih Yazar";
console.log("new full name:", student.fullName);
