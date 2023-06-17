// https://projecteuler.net/problem=1

// function multiplesOf3and5(number){
//     let sum = 0;
//     for(let i = 0; i < number; i++){
//         if(i % 3 === 0 || i % 5 === 0){
//             sum += i;
//         }
//         }
//     return sum;
// }

// console.log(multiplesOf3and5(1000));

// https://projecteuler.net/problem=2

// function fibonacciEvenSum() {
//     let limit = 4000000;
//     let sum = 0;
//     let terms1 = 0;
//     let terms2 = 1;
//     let sumTerms = terms1 + terms2;
//     while (sumTerms < limit) {
//         if (sumTerms % 2 === 0) {
//             sum += sumTerms;
//         }
//         terms1 = terms2;
//         terms2 = sumTerms;
//         sumTerms = terms1 + terms2;
//     }
//     return sum;
// }

// console.log(fibonacciEvenSum());

// https://projecteuler.net/problem=2

// function largestPrimeFactor(number) {
//     let prime = 2;
//     let max = 1;
//     while (prime <= number) {
//         if (number % prime === 0) {
//             max = prime;
//             number = number / prime;
//         } else {
//             prime++;
//         }
//     }
//     return max;
// }

// console.log(largestPrimeFactor(600851475143));

// https://projecteuler.net/problem=4

//  function largestPalindromeProduct() {
//     let max = 0;
//     for(let i = 999; i > 99; i--){
//         for(let j = 999; j > 99; j--){
//             let num = i * j;
//             if(num > max && isPalindrome(num)){
//                 max = num;
//             }
//         }
//     }
//     return max;
// }

// function isPalindrome(number){
//     let str = number.toString();
//     let reverseStr = str.split("").reverse().join("");
//     return str === reverseStr;
// }

// console.log(largestPalindromeProduct());

// https://projecteuler.net/problem=5



    // function smallestMult(n) {
    //     let smallest = 1;
    //     for(let i = 1; i <= n; i++){
    //         smallest = evenDivide(smallest, i);
    //     }
    //     return smallest;
    // }

    // function evenDivide(a, b){
    //     let num = a;
    //     while(num % b !== 0){
    //         num += a;
    //     }
    //     return num;
    // }

    // console.log(smallestMult(20));

// https://projecteuler.net/problem=6

// function sumSquareDifference(n) {
//     let sum = 0;
//     let sumOfSquares = 0;
//     for(let i = 1; i <= n; i++){
//         sum += i;
//         sumOfSquares += i * i;
//     }
//     return sum * sum - sumOfSquares;
// }

// console.log(sumSquareDifference(100));

// https://projecteuler.net/problem=7

// function lastPrime(n) {
//     let count = 0;
//     let i = 1;
//     while(count < n){
//         i++;
//         if(isPrime(i)){
//             count++;
//         }
//     }
//     return i;
// }

// function isPrime(n){
//     if(n < 2){
//         return false;
//     }
//     for(let i = 2; i <= Math.sqrt(n); i++){
//         if(n % i === 0){
//             return false;
//         }
//     }
//     return true;
// }

// console.log(lastPrime(10001));

// https://projecteuler.net/problem=8

//  function largestProductinaSeries(n){
//     let str = "7316717653133062491922511967442657474235534919493496983520312774506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753697817977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257530420752963450"

//     let max = 0;
//     for(let i = 0; i < str.length - n; i++){
//         let product = 1;
//         for(let j = i; j < i + n; j++){
//             product *= parseInt(str[j]);
//         }
//         if(product > max){
//             max = product;
//         }
//     }
//     return max;
//  }

//     console.log(largestProductinaSeries(13));

// https://projecteuler.net/problem=9

function pythagoreanTriplet(n){
    for(let a = 1; a < n; a++){
        for(let b = a + 1; b < n; b++){
            let c = n - a - b;
            if(a * a + b * b === c * c){
                return a * b * c;
            }
        }
    }
}

console.log(pythagoreanTriplet(1000));

// https://projecteuler.net/problem=10

function summationOfPrimes(n){
    let sum = 0;
    for(let i = 2; i < n; i++){
        if(isPrime(i)){
            sum += i;
        }
    }
    return sum;
}

function isPrime(n){
    if(n < 2){
        return false;
    }
    for(let i = 2; i <= Math.sqrt(n); i++){
        if(n % i === 0){
            return false;
        }
    }
    return true;
}

console.log(summationOfPrimes(2000000));

// https://projecteuler.net/problem=11



// https://projecteuler.net/problem=12



// https://projecteuler.net/problem=13



// https://projecteuler.net/problem=14

// https://projecteuler.net/problem=15

// https://projecteuler.net/problem=16

// https://projecteuler.net/problem=17

// https://projecteuler.net/problem=18

// https://projecteuler.net/problem=19

// https://projecteuler.net/problem=20




