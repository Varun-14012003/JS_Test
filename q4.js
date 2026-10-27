"use strict";
class Person {
}
class Students extends Person {
    name;
    grade;
    constructor(name, grade) {
        super();
        this.name = name;
        this.grade = grade;
    }
    getDetails() {
        return `name: ${this.name}, grade: ${this.grade}`;
    }
    getRole() {
        return "Role: Student";
    }
}
class Teacher extends Person {
    name;
    subject;
    constructor(name, subject) {
        super();
        this.name = name;
        this.subject = subject;
    }
    getDetails() {
        return `name: ${this.name}, subject: ${this.subject}`;
    }
    getRole() {
        return "Role: Teacher";
    }
}
const stud1 = new Students("Varanasya", "A");
const teacher1 = new Teacher("Ajay", "JAVA");
console.log(stud1.getDetails());
console.log(stud1.getRole());
console.log(teacher1.getDetails());
console.log(teacher1.getRole());
