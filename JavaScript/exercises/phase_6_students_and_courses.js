// Instructions
// Write classes to model students and the courses they can enroll in.

// Student class
// Student - a constructor function which should take a first and last name, and set both of those as attributes. It should also set a courses attribute to an empty array.
// Student.prototype.name - returns the concatenation of the student's first and last name
// Student.prototype.enroll - receives Course object, adds it to the student's list of courses, and updates the Course's list of enrolled students
// enroll should ignore attempts to re-enroll a student
// Student.prototype.courseLoad - returns a hash of departments to number of credits the student is taking in that department

// Course class
// Course, a constructor function which should take the course name, department, and number of credits. It should also initialize students attribute to an empty array.
// Course.prototype.addStudent should add a student to the class
// Probably can rely upon Student.prototype.enroll
// Overlapping Courses
// Each course should also take a set of days of the week ('mon', 'tue', ...), plus a time block (assume each day is broken into 8 consecutive time blocks). So a course could meet ['mon', 'wed', 'fri'] during block #1.
// Update your constructor function to also take a time block and days of the week
// Write a method Course.prototype.conflictsWith which takes a second Course and returns true if they conflict
// Update Student.prototype.enroll so that an error is raised if a Student enrolls in a course that conflicts with an existing course time
// Write a Student.prototype.hasConflict helper method


function Student(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.courses = [];
}

function Course(name, department, numCredits, days, timeBlock) {
    this.name = name;
    this.department = department;
    this.numCredits = numCredits;
    this.days = days;
    this.timeBlock = timeBlock;
    this.students = [];
}

Student.prototype.name = function () {
    return `${this.firstName} ${this.lastName}`
}

// Student.prototype.enroll = function (course) {
//     if (!this.courses.includes(course)) {
//         this.courses.forEach(crs => {
//             if (crs.conflictsWith(course)) {
//                 throw "Course conflict!";
//             }
//         });

//         this.courses.push(course.name)
//         course.addStudent(this)
//     }
// }

Student.prototype.enroll = function (course) {
    if (!this.courses.includes(course)) {
        this.courses.forEach(crs => {
            if (crs.conflictsWith(course)) {
                throw "Course conflict";
            }
        });

        this.courses.push(course);
        course.addStudent(this);
    }
};

Student.prototype.courseLoad = function () {
    const courseLoad = {}

    this.courses.forEach(course => {
        let dpt = course.department;
        courseLoad[dpt] = courseLoad[dpt] || 0;
        courseLoad[dpt] += course.numCredits;
    })

    return courseLoad
}

Course.prototype.addStudent = function (student) {
    if (this.students.indexOf(student) === -1) {
        this.students.push(student);
        student.enroll(this);
    }
};

Course.prototype.conflictsWith = function (other) {
    if (this.block !== other.block) { return false; }
    return this.days.some(day => other.days.indexOf(day) !== -1)
};

let student1 = new Student("Nigel", "Leffler");
let course1 = new Course("101", "CS", 3, ["mon", "wed", "fri"], 1);
let course2 = new Course("201", "CS", 3, ["wed"], 1);
let course3 = new Course("301", "ENG", 3, ["tue"], 1);
let course4 = new Course("401", "BIO", 3, ["mon", "wed", "fri"], 2);
console.log(student1.name());
student1.enroll(course1);
student1.enroll(course3);
// student1.enroll(course2);
console.log(student1.courseLoad());
console.log('should be true = ' + course1.conflictsWith(course2));
console.log('should be false = ' + course1.conflictsWith(course3));
console.log('should be false = ' + course1.conflictsWith(course4));