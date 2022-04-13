let name = prompt('Привет! Как тебя зовут?');

function random(parametr) {
    return Math.ceil(Math.random() * parametr);
}

while (name == '' || name == null) {
    name = prompt('Напишиите имя');
}

alert(name + ', угадайте число от 1 до 5.');

let iteration = 1;
let number = random(5);
let guess = prompt('Какое число я загадал?');

while (guess != number) {
    iteration = iteration + 1;

    if (guess > number) {
        guess = prompt('Меньше!');
    }
    else {
        guess = prompt('Больше!');
    }
}


if (iteration > 1) {
    alert('Ты угадал, это число ' + number + '. Тебе понадобилось ' + iteration + ' попыток.');
}
else {
    alert('Ты угадал, это число ' + number + '. Тебе понадобилось ' + iteration + ' попытка.');
}