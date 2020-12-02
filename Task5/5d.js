// Getter and Setter in object initializer
let student = {
    firstName: 'Samet',
    lastName: 'Yazar',
    id: 18378,
    courses: ['Math', 'English', 'Geometry'],
    grades: [1,2,3,4,5],

}

// Adding Getter and Setter after creation of an object
Object.defineProperty(student, 'fullName', {
    get: function () {
        return this.firstName + " " + this.lastName;
    },
    set: function (name) {
        let parts = name.split(' ');
        if (parts.length !== 2) throw "The full name consists of two fords: firstname and lastname.";
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
});
Object.defineProperty(student, 'averageGrade', {
    get: function () {
        if (this.grades.length === 0)
            return 0;
        return this.grades.reduce((sum, grade) => sum + grade) / this.grades.length;
    }
});

/*
get fullName() {
    return this.firstName + " " + this.lastName;
},
set fullName(name) {
    let parts = name.split(' ');
    if (parts.length !== 2) throw "The full name consists of two fords: firstname and lastname.";
    this.firstName = parts[0];
    this.lastName = parts[1];
},
get averageGrade() {
    var sum = 0;
    if (this.grades.length === 0)
        return 0;
    for( var i = 0; i < this.grades.length; i++ ){
        sum += parseInt( this.grades[i], 10 ); //10 stands for decimals
    }
    return (sum/this.grades.length);
  }
  */
console.log("full name:", student.fullName, "\ngrades average:", student.averageGrade);
student.fullName = "Salih Yazar";
console.log("new full name:", student.fullName);
