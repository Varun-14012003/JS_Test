"use strict";
class School {
    static totalStudents = 0;
    studentList = [];
    addStudent(name) {
        this.studentList.push(name);
        School.totalStudents++;
    }
    displayStudent() {
        console.log("Student", this.studentList);
        console.log("Total Students: ", School.totalStudents);
    }
}
const school = new School();
school.addStudent("Amul");
school.addStudent("Henil");
school.displayStudent();
