class School{
    static totalStudents: number = 0
    studentList: string[] = []

    addStudent(name: string){
        this.studentList.push(name)
        School.totalStudents++

    }
    displayStudent(){
        console.log("Student", this.studentList);
        console.log("Total Students: ",School.totalStudents);
        
    }
}

const school = new School()

school.addStudent("Amul")
school.addStudent("Henil")
school.displayStudent()
