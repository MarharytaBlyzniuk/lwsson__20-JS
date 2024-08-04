/* 1.1 */
let firstName = 'Маргарита';
let lastName = 'Близнюк';
let Age = 32;
let userObj = firstName + ' ' + lastName + ' ' + Age;
console.log(userObj)

/* 1.2 */
let userObj2 = `Мене звати ${lastName} ${firstName} і мені ${Age} роки.`;
console.log(userObj2)


/* 2 */
const userObj3 = {
    firstName:'Маргарита',
    lastName: 'Близнюк',
    fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
};
console.log(userObj3.fullName())


/* 3 */
function defUpperStr(text) {
    return (text || 'default text').toUpperCase();
}
console.log(defUpperStr('My text'))
console.log(defUpperStr())




/* 4 */
function evenFn(n) {
    const evenNumb = []
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0){
            evenNumb.push(i);
        }
    }
    return evenNumb;
}
console.log(evenFn(10))
console.log(evenFn(15))
console.log(evenFn(20))
console.log(evenFn(100))





/* 5 */
let weekFn = +prompt("Введите число от 0 до 6")
switch (weekFn) {
    case 0: console.log("Понеділок")
        break;
    case 1:console.log("Вівторок")
        break;
    case 2: console.log("Середа")
        break;
    case 3: console.log("Четвер")
        break;
    case 4: console.log("П'ятниця")
        break;
    case 5: console.log("Субота")
        break;
    case 6: console.log("Неділя")
        break;
    default: console.log('null')

}


/* 6.1 */
function ageClassification(n) {
    return n < 0 ? null :
        n <= 24 ? 'Дитинство' :
            n <= 44 ? 'Молодість' :
                n <= 65 ? 'Зрілість' :
                    n <= 75 ? 'Старість' :
                        n <= 90 ? 'Довголіття' :
                            n <= 122 ? 'Рекорд' :
                                null ;
}

console.log(ageClassification(-1))
console.log(ageClassification(0))
console.log(ageClassification(1))
console.log(ageClassification(24))
console.log(ageClassification(24.01))
console.log(ageClassification(44))
console.log(ageClassification(65))
console.log(ageClassification(65.1))
console.log(ageClassification(75))
console.log(ageClassification(75.01))
console.log(ageClassification(90))
console.log(ageClassification(122))
console.log(ageClassification(122.1))
console.log(ageClassification(150))



/* 6.2 */
function ageClassification2(n) {
    return n < 0 || n > 122 ? null :
        n <= 24 ? 'Дитинство' :
            n <= 44 ? 'Молодість' :
                n <= 65 ? 'Зрілість' :
                    n <= 75 ? 'Старість' :
                        n <= 90 ? 'Довголіття' :
                            'Рекорд';
}
console.log(ageClassification2(-1))
console.log(ageClassification2(0))
console.log(ageClassification2(1))
console.log(ageClassification2(24))
console.log(ageClassification2(24.01))
console.log(ageClassification2(44))
console.log(ageClassification2(65))
console.log(ageClassification2(65.1))
console.log(ageClassification2(75))
console.log(ageClassification2(75.01))
console.log(ageClassification2(90))
console.log(ageClassification2(122))
console.log(ageClassification2(122.1))
console.log(ageClassification2(150))



/* 7 */
function oddFn(n) {
  let result = []
    let i = 1
    while (i <= n) {
      if (i % 2 != 0) {
    result.push(i)}
    i += 1
    }
return result
}

console.log(oddFn(10))
console.log(oddFn(15))
console.log(oddFn(20))
console.log(oddFn(100))



/* 8 */
function mainFunc(a, b, cb) {
  if (typeof cb !== 'function') {
    return false;
  }
  return cb(a, b);
}

function cbRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// cbPow(a, b) - обчислює і повертає результат піднесення числа a у ступінь b.
function cbPow(num, pow) {
    return Math.pow(num, pow);
}

// cbAdd(a, b) - обчислює і повертає суму двох чисел a і b.
function cbAdd(a, b) {
    return a + b;
}

console.log(mainFunc(2, 5, cbRandom));
console.log(mainFunc(10, 30, cbRandom));
console.log(mainFunc(2, 5, cbPow));
console.log(mainFunc(2, 5, cbAdd));
console.log(mainFunc(2, 5, 'not a func'));