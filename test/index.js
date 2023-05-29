let users = `petya, masha, olya`;

console.log(users.length);

let test = 'Мы компания \"Google\"';
console.log(test);

let position = test.indexOf('Google');
console.log(position);

let sliced = test.slice(position, -1);
console.log(sliced);

let apple = test.replace(/google/i, 'Apple');

console.log(apple);

let message = "Привет, username!";
let name = "Анна";
let result = message.replace('username', name);
console.log(result);

let big = name.toUpperCase();
console.log(big);
let small = name.toLowerCase(); 
console.log(small);

let username = "анна";
if (name.toLowerCase() == username.toLowerCase()) {
console.log(true);

}

console.log(name[0]);
console.log(name[name.length-1]);

let txt = "Москва, Санкт-Петербург, Ярославль";
let cities = txt.split(',');
console.log(cities);
console.log(cities.join(';'));

let str = '         Москва';
let clean = str.trim(str);
console.log(clean);

//Math

console.log(Math.floor(0.01));
console.log(Math.ceil(0.01));
console.log(Math.round(0.01));
console.log((0.214415).toFixed(2));
console.log(Math.round(Math.random()*100));
let arr = [];
arr.push(Math.round(Math.random()*100));
arr.push(Math.round(Math.random()*100));
arr.push(Math.round(Math.random()*100));
arr.push(Math.round(Math.random()*100));
arr.push(Math.round(Math.random()*100));

console.log(arr);