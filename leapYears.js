const leapYears = function(year) {
    let condizione1 = year/4
    let condizione2 = year/100
    let condizione3 = year/400
     if (Number.isInteger(condizione1 && condizione3)){
       return 'True';
    }else if (Number.isInteger(condizione1 && condizione2)) {
       return 'False';
     }else if (Number.isInteger(condizione2 && condizione3)){
       return 'True';
     }else if (Number.isInteger(condizione1)){
     return 'True';
     }else
     return 'False';
    }

module.exports = leapYears
