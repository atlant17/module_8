document.getElementById("startGame").addEventListener('click', function(startGame) {
    maxValue = parseInt(document.getElementById("maxValue").value);
    minValue = parseInt(document.getElementById("minValue").value);
    if (isNaN(minValue) || isNaN(maxValue)) {
    // alert('Загадайте любое целое число от -99 до 99, а я его угадаю');
    minValue = -99;
    maxValue = 99;
    // } else {
    // alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
    }
       // условие для мин и макс (-999 и 999)
    
   minValue = (minValue <= -999) ? minValue = -999 : minValue; 
   maxValue = (maxValue >= 999) ? maxValue = 999 : maxValue;
})




// let minValue = parseInt(prompt('Минимальное знание числа для игры','-999'));
// let maxValue = parseInt(prompt('Максимальное знание числа для игры','999'));

    // условие NaN;
// if (isNaN(minValue) || isNaN(maxValue)) {
//     alert('Загадайте любое целое число от -99 до 99, а я его угадаю');
//     minValue = -99;
//     maxValue = 99;
//     } else {
//     alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
// }

   // условие для мин и макс (-999 и 999)
   minValue = (minValue <= -999) ? minValue = -999 : minValue; 
   maxValue = (maxValue >= 999) ? maxValue = 999 : maxValue;

let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${convertedNumbers(answerNumber)}?`; 

// массив данных для текстового представления числа на русском языке
let ones = ['', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять'];
let teens = ['', 'десять', 'одинадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'];
let dozens = ['', 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'];
let hundreds = ['', 'сто', 'двести', 'триста', 'четыреста', 'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот'];

function convertedNumbers (number) {
    isPositive = number > 0; // true +
    number = Math.abs(number);
    textNumber = '';
    let numberOnes = 0;
    let numberDozens = 0;
    let numberHundreds = 0;
    if (number == 0) {
        return 0;
    } else if (number > 9 && number < 20) {
        textNumber = textNumber + teens[number % 10];
    } else {
        numberHundreds = (number - number % 100) / 100; //сотни
        numberDozens = (number - number % 10) / 10 % 10; //десятки
        numberOnes = number % 10; //единицы
    
        // знак + сотни + десятки + единицы 
        if (isPositive == false) {
            textNumber = textNumber + 'минус ';
        } 
        if (numberHundreds > 0) {
            textNumber = textNumber + hundreds[numberHundreds];
        }
        if (numberDozens > 0) {
            textNumber = textNumber + ' ' + dozens[numberDozens];
        }
        if (numberOnes > 0) {
            textNumber = textNumber + ' ' + ones[numberOnes];
        }
        
    } 
    // return textNumber
    textNumber = textNumber.trim();
    if (textNumber.length < 20) {
        return textNumber;
    } else if (isPositive == false) {
        return -number;
    } else {
        return number;
    }
}

// У меня, к сожалнеию, не получилось сделать так, как требует задание, решил выйти из положения другим путем
document.getElementById('btnRetry').addEventListener('click', function () {
    location.reload();  
}) 
// minValue = 0;
// maxValue = 100;
// orderNumber = 1;
// answerNumber  = Math.floor((minValue + maxValue) / 2);

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random() * 3);
            let answerPhrase;
            if (phraseRandom <= 0.7) {
                answerPhrase = `Вы точно загадали число?\n\u{1F648}`;
            } else if (phraseRandom >= 2.4) {
                answerPhrase = `Я сдаюсь..\n\u{2639}`;
            } else {
                answerPhrase = `Попробуем заново...?\n\u{2639}`;
            }
            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;

            const phraseRandom = Math.round( Math.random() * 2);
            let answerPhrase;
            if (phraseRandom <= 0.7) {
                answerPhrase = `Быть может, это число ${convertedNumbers(answerNumber)}? \n\u{1F9D0}`;
            } else if (phraseRandom >= 2.4) {
                answerPhrase = `Похоже это число ${convertedNumbers(answerNumber)}? \n\u{1F9D0}`;
            } else {
                answerPhrase = `Ваше число ${convertedNumbers(answerNumber)}\n\u{1F9D0}?`;
            }
            answerField.innerText = answerPhrase;
        } 
    }
})

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random() * 3);
            let answerPhrase;
            if (phraseRandom <= 0.7) {
                answerPhrase = `Вы точно загадали число?\n\u{1F648}`;
            } else if (phraseRandom >= 2.4) {
                answerPhrase = `Я сдаюсь..\n\u{2639}`;
            } else {
                answerPhrase = `Попробуем заново...?\n\u{2639}`;
            }
            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            const phraseRandom = Math.round( Math.random() * 2);
            let answerPhrase;
            if (phraseRandom <= 0.7) {
                answerPhrase = `Должно быть это число ${convertedNumbers(answerNumber)}? \n\u{1F9D0}`;
            } else if (phraseRandom >= 2.4) {
                answerPhrase = `Ваше число ${convertedNumbers(answerNumber)}? \n\u{1F9D0}`;
            } else {
                answerPhrase = `Вы загадали число ${convertedNumbers(answerNumber)}\n\u{1F9D0}?`;
            }
            answerField.innerText = answerPhrase;
        }
    }})

document.getElementById('btnEqual').addEventListener('click', function () {
    const phraseRandom = Math.round( Math.random() * 3);
    let answerPhrase;
    if (phraseRandom <= 0.8) {
        answerPhrase = `Это число ${convertedNumbers(answerNumber)}? \n\u{1F913}`;
    } else if (phraseRandom >= 2.5) {
        answerPhrase = `Ай какой я молодец \n\u{1F913}`;
    } else {
        answerPhrase =`Похоже на маленькую победу? \n\u{1F913}`;
    }
    answerField.innerText = answerPhrase;
    gameRun = false
})

