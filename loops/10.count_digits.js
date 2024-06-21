let num = 1,rem;
let count=0;

while (num) {
    rem = num % 10;
    count++;
    num = num / 10;
}
console.log(count);

