function formatPopulation(num) {
  num = num.toString().split('');

  if (num.length < 4) return num;
  else {
    let arr = [];
    deleteLastNumbers(num, arr);
    return arr.join('.');
  }
}

function deleteLastNumbers(num, arr) {
  arr.unshift(num.splice(num.length - 3, 3).join(''));
  if (num.length <= 3) {
    arr.unshift(num.join(''));
    return;
  } else deleteLastNumbers(num, arr);
}

export default formatPopulation;
