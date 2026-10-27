abstract class Person{
    abstract getDetails(): string 
    abstract getRole(): string
}

class Students extends Person{
    constructor(public name: string, public grade: string){
        super()
    }
    getDetails(): string {
        return `name: ${this.name}, grade: ${this.grade}`
    }
    getRole(): string {
        return "Role: Student"
    }
}

class Teacher extends Person{
    constructor(public name: string, public subject: string){
        super()
    }
    getDetails(): string {
        return `name: ${this.name}, subject: ${this.subject}`
    }
    getRole(): string {
        return "Role: Teacher"
    }
}

const stud1 = new Students("Varanasya","A")
const teacher1 = new Teacher("Ajay","JAVA")

console.log(stud1.getDetails());
console.log(stud1.getRole());

console.log(teacher1.getDetails());
console.log(teacher1.getRole());