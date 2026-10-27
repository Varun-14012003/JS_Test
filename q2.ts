class Student{
    name : string
    studentId : number
    grade : string
    address : string 

    constructor(name: string, studentId: number, grade: string, address: string){
        this.name = name
        this.studentId = studentId
        this.grade = grade
        this.address = address
    }

    displayInfo(): void {
        console.log("Name: ",this.name);
        console.log("StudentID: ",this.studentId);
        console.log("Grade: ",this.grade);
        console.log("Address: ",this.address);
    }
}

const student1 = new Student("Varanasya",1 , "A", "Mumbai")

student1.displayInfo()