
const array = [100, 55, 15, 300, 20]
const array2 = [400, 122, 132, 111, 1100, 688, 900]
let sum = 0
let result = 0


for (let i = 0; i < array.length; i++) {
    result = sum + array[i]
    console.log(sum, '+', array[i], "=", result);
    sum += array[i]
}

console.log('result=', sum);

for (let i = 0; i < array2.length; i++) {
    for ( j = i; j < array2.length; j++) {
        if (array2[i] < array2[j]) {
            let elem = array2[i]
            array2[i] = array2[j]
            array2[j] = elem
        }
    }
    console.log(array2[i]);
}



