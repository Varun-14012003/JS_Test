const marks = [50, 60, 70, 30, 90]

const increaseMarks = function(marks){
    return marks.map(mark => mark + 10)
}

const updatedMarks = increaseMarks(marks)
console.log(updatedMarks);
