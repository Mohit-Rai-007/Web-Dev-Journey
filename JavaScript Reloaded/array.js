let fruit=["Apple","Banana","Grapes", "mango", "LAssi", "Milkshake"]

fruit.push("orange")
console.log(fruit);

fruit.pop()
console.log(fruit);

fruit.unshift("Mango")
console.log(fruit);

fruit.shift()
console.log(fruit);

console.log(fruit.length);

let sliced=fruit.slice(1,3)
console.log(sliced);

// Practice Questions

let marks = [35, 78, 45, 49, 91, 35];

for (let i = 0; i < marks.length; i++) {


    if (marks[i] % 2 === 0) {
        marks.splice(i, 1);
        i--; 
    }
}

console.log(marks); 


for(let i=0;i<marks.length;i++)
{
    if(marks[i]<40)
    {
        marks.splice(i,1,"Fail");
    }
}
console.log(marks);
