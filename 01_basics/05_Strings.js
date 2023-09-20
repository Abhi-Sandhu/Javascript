const name = "AbhiSandhu";
const repoCount = 50;
// console.log(name + repoCount + " value")

console.log(`My name is ${name} and repo count is ${repoCount}`);

const gameName  = new String('hitesh-hc-com')
// console.log(gameName[0]);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));

console.log(gameName.substring(0, 4))

console.log(gameName.slice(-8, 4))   // can be used to give -ve 
                                    //   values also

const newString = "      hitesh         ";
console.log(newString);
console.log(newString.trim());

const url = "https://hitesh.com/hitesh%20choudhary";
console.log(url);
console.log(url.replace('%20', '-'));

console.log(newString.includes('hitesh'));
console.log(newString.includes('sundar'));

console.log(gameName.split('-'));
