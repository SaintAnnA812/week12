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
console.log(name[name.length - 1]);

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
console.log(Math.round(Math.random() * 100));
let arr = [];
arr.push(Math.round(Math.random() * 100));
arr.push(Math.round(Math.random() * 100));
arr.push(Math.round(Math.random() * 100));
arr.push(Math.round(Math.random() * 100));
arr.push(Math.round(Math.random() * 100));

console.log(arr);

//дз мои попытки

/*function clickMe() {
    let username = document.getElementById('username').value;
    let a = username.trim(username);
    let usname = a[0].toUpperCase() + a.slice(1);


    const comment1 = checkSpam('buy ViAgRA now'); //результат buy *** now
    const comment2 = checkSpam('free xxx'); //результат free ***
    const comment3 = checkSpam("innocent rabbit"); //результат innocent rabbit

    let comments = document.getElementById('comments').value;

    function checkSpam() {
        let comments = document.getElementById('comments').value;
        let clean = comments.replace(/(xxx|viagra)/gi, "***");
        comments.innerHTML = clean.value
    }

    //comments.innerHTML = comment1 | comment2 | comment3

    let chat = document.getElementById('chat');


    let img = new Image(50, 50);
    img.src = document.getElementById('avatar').value;
    chat.before(img);

    chat = img + " " + usname + " " + comments;


    console.log(chat);

}
*/