let s = "LXXIX"
const map = {
    "I": 1, 
    "V": 5, 
    "X": 10, 
    "L": 50, 
    "C": 100, 
    "D": 500, 
    "M": 1000
}
let result = 0

for (let i = 0; i < s.length ; i++ ){
    const currentNum = map[s[i]];
    const nextNum = map[s[i + 1]];

    if (nextNum && currentNum < nextNum) {
        result += nextNum - currentNum;
        i++;
      } else {
        result += currentNum;
      }
  
}

console.log(result)