let days = ["Monday","Thursday","Saturday","Wednesday","Tuesday"];

let result = getLastValue(days);
console.log(result);

function getLastValue() {
    let sortedArray = days.sort();
    return sortedArray[days.length-1];
}