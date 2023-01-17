
/* 1. Создать функцию calculate(operand1, operand2, sign), где operand1 и operand2 — два числа, sign — знак арифметической операции.
       Функция должна расчитывать результат операции, исходя из переданного ей знака. 
       Функция должна проверять корректность введенных чисел и знака операции.
       Все аргументы для функции принять от пользователя.
 */
function calculate() {

  let operand1 = +prompt(`Enter number for calculation: `)
  let operand2 = +prompt(`Enter number for calculation: `) 
  if (isNaN(operand1) || isNaN(operand2)) return "Your operands are not correct"
  let sign = prompt(`Enter mathematic sign: `)
  return alert(sign === "+" ? operand1 + operand2 : sign === "-" ? operand1 - operand2 : sign === "*" ? operand1 * operand2 : sign === "/" ? operand1 / operand2 : "Math sign is incorect")
}


/* 2. Создать функцию, возводящую число в степень, число и сама степень вводится пользователем */

function getNumberToPower() {
  let number = prompt("enter the number to be raised to the power")
  let exponent = prompt("enter the power to which you want to raise the number")
  return alert(Math.pow(number, exponent))
}


/* 3.  Создать игру "Камень-Ножницы-Бумага". */

function game() {

  let playerChoise = prompt('Що будемо викидати: камінь, ножиці чи папір?', "камінь, ножиці, папір").toLowerCase()
  if (!(playerChoise == 'камінь' || playerChoise == 'ножиці' || playerChoise == 'папір')) {
    return alert("Ви вибрали невірну фігуру. Почніть спочатку")
  }
  let computerRange = Math.random()
  let computerChoiseInNumber = () => computerRange <= 0.33 ? "камінь" : computerRange > 0.34 && computerRange < 0.66 ? "ножиці" : "папір"
  let computerChoice = computerChoiseInNumber()

  if (playerChoise == computerChoice) {
    return alert(`Ти вибрав: ${playerChoise}, але твій супротивник також вибрав: ${computerChoice}. Тож НІЧИЯ`)
  } else if ((playerChoise == "камінь" && computerChoice == "ножиці") || (playerChoise == "ножиці" && computerChoice == "папір") || (playerChoise == "папір" && computerChoice == "камінь")) {
    return alert(`Ти вибрав: ${playerChoise}, а твій супротивник вибрав: ${computerChoice}. Тож ти ВИГРАВ`)
  } else {
    return alert(`Ти вибрав: ${playerChoise}, а твій супротивник вибрав: ${computerChoice}. Тож ти ПРОГРАВ`)
  }
}


/* 
4. Напишите функцию, которая возвращает n - е число Фибоначчи.Для решения используйте цикл.
 */
function fib(n) {
  let a = 1;
  let b = 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}

