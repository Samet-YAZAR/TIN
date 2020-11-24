function createStudent(firstName, lastName, id) {
    // Object prototype
    const studentPrototype = {
        firstName: 'Samet',
        lastName: 'Yazar',
        id: 18378,
        courses: ['Math', 'English', 'Geometry'],
        grades: [],
        this.averageGrade = function () {
            var sum = 0;
            if (grades.length === 0)
                return 0;
            for( var i = 0; i < grades.length; i++ ){
                sum += parseInt( grades[i], 10 ); //10 stands for decimals
            }
            return (sum/grades.length);
          }
        }
    // New object based on prototype
    let student = Object.create(studentPrototype);
    student.firstName = firstName;
    student.lastName = lastName;
    student.id = id;
    return student
}

let student = createStudent('Salih', 'Yazar', 28378);

function printProperties(object) {
    for (let pName in object) {
        let property = object[pName];
        console.log("name: " + pName + "\nvalue:" + property + "\ntype:" + typeof property + "\n");
    }
}

printProperties(student);
