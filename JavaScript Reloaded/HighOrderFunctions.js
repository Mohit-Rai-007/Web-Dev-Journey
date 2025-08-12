// names.forEach(name=>{names[name].toUpperCase();})
// console.log(names);

salary = [36000, 40000, 100000, 96000, 42000]
let salary_increment = salary.map(n => n + (n * 10) / 100)
console.log(salary_increment)

let good_salary = salary_increment.filter(n => n > 50000)
console.log(good_salary);

const employee = [{ name: "Mohit", Salaryy: 70000 },
{ name: "Gauransh", Salaryy: 10000 },
{ name: "Divyansh", Salaryy: 20000 },
{ name: "Shivam", Salaryy: 30000 },
{ name: "Vaibhav", Salaryy: 40000 },
{ name: "Amit", Salaryy: 700000 }
]

let nice_salary = employee.filter(n => n.Salaryy > 60000).map(m => m.name)
console.log(nice_salary)

// High Order Function Definition
// it takes argument as function and also return function
// the main diffrenxce between high order function and callback function is that high order function take function as arugument and also return function whereas callback function only take function as argument.

let total_salary = salary.reduce((acc, curr) => acc + curr, 0)
console.log(total_salary);
let max_salary= salary.reduce((acc,curr)=>curr>acc?curr:acc)
console.log(max_salary);



let max = salary[0]

for (let i = 0; i < salary.length; i++) {

    if (salary[i] > max) {
        max = salary[i]
    }
}
console.log(max);




