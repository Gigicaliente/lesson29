//task1
let name = "Ganna"
console.log(name)

name = "Janna"
console.log(name)

// let name = "Dana"
// console.log(name) //oshibka, potomu chto ne mojet byt povtorno ob'yavlena


//task2
const surname = "Akhmetova"
console.log(surname)

// surname = "Akhmedova"
// console.log(surname) //Zadannaya velichina postoyanna i ne mojet byt izmenena

//task3

//let i const imeut blochnyu vidimost, a var dostupen vo vsei oblasti vidimosti za predelami bloka poetomu mogut vozniknut oshibki

//task3

let num = 100
console.log(num)
console.log(typeof num)

let str = "GGG"
console.log(str)
console.log(typeof str)


let age = 5

let isAdult = age > 18 
console.log(isAdult)
console.log(typeof isAdult)

let coin 
console.log(coin)
console.log(typeof coin)

let car = null
console.log(car)
console.log(typeof car)


//task4

let number1 = 222
console.log(String(number1))

let string1 = "222"
console.log(Number(string1))


let und = undefined
console.log(String(und))
console.log(Number(und)) //v concoli vyyavilos NaN - potomu chto ne yavlyaetsya chislom

let nul = null
console.log(String(nul)) 
console.log(Number(nul)) //v consoli vyyavilos 0, potomu chto null=0


//task5

//V JavaScript ispolzuetsya Dinamicheskaya tipizaciya, kotoraya podrazumevaet probrazovanie tipa dannyh v moment ispolzovaniya
//Dinamocheskaya tipizaciya bolee gibkaya

let num2 = 333
console.log(String(num2))

//task6

let greeting = prompt("Input name and age", '')

console.log("Hello! " + greeting)