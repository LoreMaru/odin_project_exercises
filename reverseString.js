const reverseString = function(string) {
    let ins = "";
    ins += string;
    let split = ins.split('');
    let reverse = split.reverse("");
    let final = reverse.join("");
    return final
    }

module.exports = reverseString
