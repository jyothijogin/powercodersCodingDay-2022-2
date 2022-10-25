let numArray = [1, 3, 2, 7, 5, 6, 4];
let result = "";

weekNumbersToWords(numArray);

function weekNumbersToWords(num) {
  console.log(num);
  for (i = 0; i < 7; i++) {
    switch (num[i]) {
      case 1:
        
        result+= '"Sunday" '
        break;
      case 2:
        result+= '"Monday" '
        break;
      case 3:
        result+= '"Tuesday" '
        break;
      case 4:
        result+= '"Wednesday" '
        break;
      case 5:
        result+= '"Thursday" '
        break;
      case 6:
        result+= '"Friday" '
        break;
      case 7:
        result+= '"Saturday" '
        break;
      default:
        break;
    }
  }
  console.log(result);
}
