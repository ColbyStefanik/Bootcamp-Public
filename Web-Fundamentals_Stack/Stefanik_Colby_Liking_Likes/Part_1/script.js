console.log("page loaded...");

var likes = 3;

var postLikes1 = document.querySelector("#post-likes-1");

function addLike(element) {
    likes ++;
    console.log(likes);
    postLikes1.innerHTML = likes + " likes(s)";
}