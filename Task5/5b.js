function Student(firstName, lastName, id, grades) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.id = id;
    this.grades = grades;

    this.averageGrade = function () {
        var sum = 0;

        if (grades.length === 0)
            return 0;
        for( var i = 0; i < grades.length; i++ ){
            sum += parseInt( grades[i], 10 ); //10 stands for decimals
        }

        return (sum/grades.length);
    }

    this.printsStudentAndGradesAverage = function () {
        console.log(firstName, lastName, "Average of grades:", this.averageGrade());
    }
}

let student = new Student("Samet", "Yazar", 18378, [1, 2, 3, 4, 5]);
student.printsStudentAndGradesAverage();
