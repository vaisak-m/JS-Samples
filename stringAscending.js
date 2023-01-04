const array = ["vaisak","sonu","sarath"];

let count = 0;
for(let i in array){
    count++;
}

for (let i = 0; i < count; i++) {

    for( let j = 0; j <= i; j++)

    if (array[i] < array[j]) {
        let swap = array[i];
        array[i] = array[j];
        array[j] = swap;
    }
    
}

console.log(array);