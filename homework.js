//let x = document.getElementById('username');

//let username = x.innerHTML;

//console.log(username);

function checkMe(el) {
    let username = el.name.value;
let name = username[0].toUpperCase() + username;

    console.log(username);
    let avatar = el.avatar.value;
    console.log(avatar);
    let comments = el.comments.value;
    console.log(comments);

}