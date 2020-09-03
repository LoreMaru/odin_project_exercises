const sumAll = function(num1, num2) {
    if (num1 || num2 < 0){
      return "ERROR"
    }else(isNaN(num2, num2))
  let start = Math.max(num1, num2)+1
  let contenitore = [...Array(start).keys()];
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  return (contenitore.reduce(reducer));
  }

module.exports = sumAll
