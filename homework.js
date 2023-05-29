function clickMe() {

    let username = document.getElementById("username");
    console.log(username);
    let a = username.value.trim(username);
    console.log(a);
    let usname = a.charAt(0).toUpperCase() + a.slice(1).toLowerCase();
    console.log(usname);
    let chat = document.getElementById("chat");
    chat.innerHTML = usname;


    let comments = document.getElementById("comments");
    let clean = comments.value.replace(/(xxx|viagra)/gi, "***");
    let cleanComment = document.querySelector("#clean-comment");
    cleanComment.innerHTML = clean;


    let imgSrc = document.getElementById("avatar");
    document.querySelector("#avatar-img").src = imgSrc.value;

}



//задание со звёздочкой
let str = '<p>Hello, <b>world</b>!</p>';
function deleteTags(str) {

    let regex = /( |<([^>]+)>)/ig,
        result = str.replace(regex, "");
    return result;

};

console.log(deleteTags(str));