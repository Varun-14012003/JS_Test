const student = [
    {name: "henil", marks: 80},
    {name: "amul", marks: 90},
    {name: "Varanasya", marks: 100}
]

const passedStudent = student.filter(student => student.marks > 80)
console.log(passedStudent);
