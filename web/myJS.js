////////////////////////////////////////////////////////////////////////////////
//1.1
////////////////////////////////////////////////////////////////////////////////

var testBoolean = true;
var testNumber = 42;
var testString = "test";
var testArray = ["test1", "test2"];
var testObject = {firstname: "Peter", lastname: "Thomsen"};

console.log(testBoolean);
console.log(testNumber);
console.log(testString);
console.log(testArray);
console.log(testObject);

////////////////////////////////////////////////////////////////////////////////
//1.2
////////////////////////////////////////////////////////////////////////////////
var arr = [testString, testNumber, testObject, testBoolean];

console.log(typeof arr[0]);
console.log(typeof arr[1]);
console.log(typeof arr[2]);
console.log(typeof arr[3]);
    
////////////////////////////////////////////////////////////////////////////////
//1.3
////////////////////////////////////////////////////////////////////////////////    
    
function myStudent (id, name) {
    this.studentId = id;
    this.studentName = name;
}

Student.prototype.toString = function(){return(this.studentId + ": " + this.studentName);}; 

var student1 = new myStudent(1, "John");
var student2 = new myStudent(2, "Paul");
var student3 = new myStudent(3, "Ringo");

var students = [student1, student2, student3];

students.forEach(function(student) {
    console.log(student.toString());
});

////////////////////////////////////////////////////////////////////////////////
//1.4
////////////////////////////////////////////////////////////////////////////////

function Student(name, age, isFemale) {
    this.studentName = name;
    this.studentAge = age;
    this.isFemale = isFemale;
}

var student1 = new Student("Maggie", 1, true);
var student2 = new Student("Lisa", 8, true);
var student3 = new Student("Bart", 10, false);
var student4 = new Student("Marge", 34, true);
var student5 = new Student("Homer", 40, false);

var students = [student1, student2, student3, student4, student5];

students.getYoungest = function () {
    var temp = students[0];

    for (var i = 1; i < students.length; i++) {
        if (students[i].studentAge < temp.studentAge) {
            temp = students[i];
        }
    }
    return temp;
};

students.getFemales = function () {
    var tempArr = new Array();

    for (var i = 0; i < students.length; i++) {
        if (students[i].isFemale) {
            tempArr.push(students[i]);
        }
    }
    return tempArr;
};
var femaleStudents = students.getFemales();

console.log("Youngest student:");
console.log(students.getYoungest());

console.log("Female students:");
femaleStudents.forEach(function (student) {
    console.log(student);
});

////////////////////////////////////////////////////////////////////////////////
//1.5
////////////////////////////////////////////////////////////////////////////////

function removeStudent(studentArray, student) {
    var index = studentArray.indexOf(student);

    if (index > -1) {
        studentArray.splice(index, 1);
    }
}
console.log("before remove:");
console.log(students);

removeStudent(students, student3);

console.log("after remove:");
console.log(students);

////////////////////////////////////////////////////////////////////////////////
//1.6
////////////////////////////////////////////////////////////////////////////////

console.log("Over 30:");
students.forEach(function (student) {
    if (student.studentAge >= 30) {
        console.log(student.studentName);
    }
});

////////////////////////////////////////////////////////////////////////////////
//1.7
////////////////////////////////////////////////////////////////////////////////

function max() {
    var args = Array.prototype.slice.call(arguments);

    var biggest = args[0];

    for (var i = 1; i < args.length; i++) {
        if (args[i] > biggest) {
            biggest = args[i];
        }
    }
    return biggest;
}

console.log(max(1, 2, 3, 6, 5));

////////////////////////////////////////////////////////////////////////////////
//1.8
////////////////////////////////////////////////////////////////////////////////

function getCurrentDay() {

    var date = new Date();

    var dayNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    return dayNames[date.getDay() - 1];
}

console.log(getCurrentDay());