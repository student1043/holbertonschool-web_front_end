function countPrimeNumbers() {
    let count = 0;
    function isPrime(num) {
        if(num < 2) return false;
        for (var i = 2; i < num; i++) {
            if(num%i==0)
                return false;
        }
        return true;
    }
    for(var i = 0; i < 100; i++){
        if(isPrime(i)) count+=1;
    }
    return(count);
}
let begin = performance.now();
for (let i = 0; i < 100; i++) {
    console.log(countPrimeNumbers());
  }
let end = performance.now();
console.log('Execution time of printing countPrimeNumbers was ' + (end - begin) + ' milliseconds');
