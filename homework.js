function clickMe() {
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


//задание со звёздочкой
let str = '<p>Hello, <b>world</b>!</p>';
function deleteTags(str) {

    let regex = /( |<([^>]+)>)/ig,
        result = str.replace(regex, "");
    return result;

};

console.log(deleteTags(str));