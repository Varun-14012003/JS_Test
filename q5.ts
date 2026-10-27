function getStudentInfo<T>(info: T):T{
    return info
}

console.log(getStudentInfo<string>("Varanasya"));
console.log(getStudentInfo<number>(1));
console.log(getStudentInfo<string>("A"));