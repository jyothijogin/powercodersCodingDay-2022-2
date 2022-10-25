let input = prompt("Enter a number : ");
alert(reverseNumber());

function reverseNumber() {
    return parseFloat(input.toString()
        .split('')
        .reverse()
        .join('')) * Math.sign(input);

}