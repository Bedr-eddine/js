function calc(operator, number1, number2) {
    switch (operator) {
        case "+":
            console.log((number1 * 1) + (number2 * 1));
            break;
        case "-":
            console.log(number1 - number2);
            break;
        case "*":
            console.log(number1 * number2);
            break;
        case "/":
            console.log(number1 / number2);
            break;
    }
}
calc("*", "6", "2");
calc("-", "4", "7");
calc("/", "3", "3");