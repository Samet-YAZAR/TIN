
function Student(firstName, lastName, id) {
    // Object prototype
    var studentInitializer = {
        firstName: 'Samet',
        lastName: 'Yazar',
        id: 18378,
        courses: ['Math', 'English', 'Geometry'],
        grades: [1,2,3,4,5],
        averageGrade: function () {
            var sum = 0;
            if (this.grades.length === 0)
                return 0;
            for( var i = 0; i < this.grades.length; i++ ){
                sum += parseInt( this.grades[i], 10 ); //10 stands for decimals
            }
            return (sum/this.grades.length);
          }
        }
    // New object based on - Object initializer based created object
    let student = Object.create(studentInitializer);
    //As variable studentInitializer has created under Object class,it become_proto_.
    student.firstName = firstName;
    student.lastName = lastName;
    student.id = id;

    return student;
    //Even though only method gets 3 parameters, returned student can have access to all properties of studentInitializer object.
}

let student1 = Student('Salih', 'Yazar', 28378);

function printProperties(object) {
    for (let pName in object) {
        let property = object[pName];
        console.log("name: " + pName + "\nvalue:" + property + "\ntype:" + typeof property + "\n");
    }
}

printProperties(student1);
