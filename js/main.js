// Завдання 1
// Напиши функцію logItems(array), яка отримує масив і використовує цикл for, який для кожного елемента масиву буде виводити в консоль повідомлення в форматі [номер елемента] - [значення елемента].
// Нумерація повинна починатися з 1. Наприклад, для першого елемента масиву ['Mango', 'Poly', 'Ajax'] з індексом 0 буде виведено '1 - Mango', а для індексу 2 виведе '3 - Ajax'
function logItems(...array) {
    for (let index = 0; index < array.length; index++) {
        let arrayFor = array[index];
        arrayFor = `${index + 1} - ${arrayFor}`
        console.log(arrayFor);
    }
}
logItems("Mango", "Poly", "Ajax")
// Завдання 2
// Напиши скрипт підрахунку вартості гравіювання прикрас. Для цього створи функцію calculateEngravingPrice(message, pricePerWord) приймаючу рядок (в рядку будуть тільки слова і прогалини) і ціну гравіювання одного слова, і повертає ціну гравіювання всіх слів в рядку.
let price = 0;
function calculateEngravingPrice(message, pricePerWord) {
    const elementArray = message.split(" ")
    price = elementArray.length * pricePerWord;
    return price;
} 
console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 20));
// Завдання 3
// Напиши функцію findLongestWord(string), яка приймає параметром довільний рядок (в рядку будуть тільки слова і прогалини) і повертає найдовше слово в цьому рядку.
function findLongestWord(string) {
    const longestWords = string.split(" ")
    let longestWord = ""
    for (const elementWord of longestWords) {
      if (elementWord.length > longestWord.length) {
          longestWord = elementWord;
      }
    }
    return longestWord;
  }
console.log(findLongestWord("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus iusto natus eius similique laudantium recusandae dolorum, harum odio ipsa quos dolores vitae, consequuntur omnis facere reiciendis fugit molestias ex ratione."))
// Завдання 4
// Напиши функцію formatString(string) яка приймає рядок і форматує його якщо необхідно.
 
// Якщо довжина рядка не перевищує 40 символів, функція повертає її в початковому вигляді.
 
// Якщо довжина більше 40 символів, то функція обрізає рядок до 40-ка символів і додає в кінець рядка три крапки '...', після чого повертає укорочену версію
function formatString(string) {
    const elementArray = string.split("")
    if (string.length > 40) {
        const elementArraySlice = elementArray.slice(0, 39)
        elementArraySlice.push("...")
        return elementArraySlice.join("");
    }
    return string;
} 
console.log(formatString("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus iusto natus eius similique laudantium recusandae dolorum, harum odio ipsa quos dolores vitae, consequuntur omnis facere reiciendis fugit molestias ex ratione."));
console.log(formatString("fffgf"));
// Завдання 5
// Напиши функцію checkForSpam(message), приймаючу 1 параметр message — рядок. Функція перевіряє її на вміст слів spam і sale. Якщо знайшли заборонене слово, то функція повертає true, якщо заборонених слів немає функція повертає false. Слова в рядку можуть бути в довільному регістрі.
function checkForSpam(message) {
    if (message.includes("sale")) {
        return message.includes("sale");
    }
    if (message.includes("spam")) {
        return message.includes("spam")
    }
    return false;
}
console.log(checkForSpam("spam"));
console.log(checkForSpam("sale"));
console.log(checkForSpam(" ggygsale spam ghf"));
console.log(checkForSpam("Hello world"));

// Завдання 6
// Напиши скрипт з наступним функціоналом:
 
// При завантаженні сторінки користувачеві пропонується в prompt ввести число. Введення зберігається в змінну input і додається в масив чисел numbers.
 
// Операція введення числа користувачем і збереження в масив триває до тих пор, пір, поки користувач не натисне Cancel в prompt.
 
// Після того як користувач припинив введення натиснувши Cancel, якщо масив не порожній, необхідно порахувати суму всіх елементів масиву і записати її в змінну total. Використовуй цикл for або for...of. Після чого в консоль виведи рядок 'Загальна сума чисел дорівнює [сума]'.
// 🔔 Робити перевірку того, що користувач ввів саме число, а не довільний набір символів, не обов'язково. Якщо хочеш, в разі некоректного введення, показуй alert з текстом 'Було введено не число, попробуйте ще раз', при цьому результат promptзаписувати в масив чисел не потрібно, після чого знову користувачеві пропонується ввести число в prompt.
let input;

let numbers = [];
 
let total = 0;

function promptTotalNumbers() {
    do {
        var promptNumbers = prompt("Введіть число")
        input = Number(promptNumbers)
        console.log(input);
            if (input) {
                numbers.push(input)
                console.log(numbers);
            }
            if (Number.isNaN(input)) {
                alert("Було введено не число, попробуйте ще раз")
            }
    } while (promptNumbers);
    for (const number of numbers) {
        total += number
    }
    console.log(`Загальна сума чисел дорівнює: ${total}`);
}

promptTotalNumbers()

// Завдання 7 — додаткове, виконувати не обов'язково
// Є масив logins з логінами користувачів. Напиши скрипт додавання логіна в масив logins. Логін, який додається повинен:
 
// проходити перевірку на довжину від 4 до 16-ти символів включно
 
// бути унікальним, тобто бути відсутнім в масиві logins
const logins = ["Harry", "Alan", "Evan", "David", "Emily"];

const newLogin = "Anna";
const loginInvalidOne = "superduperchiburek";
const loginInvalidTwo = "Alan";

function addLogin(allLogins, login) {
    if (login.length < 4, login.length > 16) {
        console.log("Помилка! Логін повинен бути від 4 до 16 символів");
        return;
    }
    for (const allLogin of allLogins) {
    if (allLogin === login) {
        console.log("Такий логін уже використовується!");
        return;
    }
}
        logins.push(newLogin)
        console.log("Логін успішно доданий!")
        console.log(logins);
}

addLogin(logins, loginInvalidOne)
addLogin(logins, loginInvalidTwo)
addLogin(logins, newLogin)