//Task1
// function sum(a) {
//     if (a < 10){
//         return a; 
//     }
//     let b = (a % 10);
//     return Math.min(b, sum(Math.floor((a) / 10)));
// }
// console.log(sum(123456789)); 



//Task2
// function sum(a) {
//     if (a < 10){
//         return a; 
//     }
//     let b = (a % 10);
//     return Math.max(b, sum(Math.floor((a) / 10)));
// }
// console.log(sum(457)); 




//Task3
// function sum(a, b) {
//     if (a <= b) {
//         sum(a + 1, b);
//         console.log(a);
//     }
// }
// sum(5,10);


//Task4
// function sum(a, b, c) {
//     let sum = (a + b + c) + (a - b) * c + (b / a) + (c % b);
//     return sum;
// }
// console.log(sum(3, 5, 7));


//Task5
// function sum(a) {
//     const str = Math.abs(a).toString();
//     if (str.length === 1) {
//         return str; 
//     }
//     return sum(str.slice(1, -1));
// }
// console.log(sum(56773)); 
// console.log(sum(234));   



//Task6
// function sum(a){
//     return (b)=>{
//         return b=a/a
//     }
// }
// let sum1=sum(1)
// console.log(sum1(14));
// console.log(sum1());
// console.log(sum1());



//Task7
// function sum(a) {
//     let b = a.toString(); 
//     return () => {
//         b = b.slice(1); 
//         return b;
//     }
// }
// let sum1 = sum(48647);
// console.log(sum1());
// console.log(sum1());
// console.log(sum1());