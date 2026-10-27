const student = [
    {name: "henil", marks: 80},
    {name: "amul", marks: 90},
    {name: "Varanasya", marks: 100}
]

const totalMarks = student.reduce((total,student) => total+ student.marks, 0)

console.log(totalMarks);
