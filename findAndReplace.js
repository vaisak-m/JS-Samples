const array = [9,4,2,5,6,3,1,7];

let count = 0;
for(let i in array){
    count++;
}

let a = 6;
let b = 8;

for (i = 0; i <= count; i++ )
{
    if (array[i] == a) {

     array[i] = b; 
    }
}

console.log(array);
