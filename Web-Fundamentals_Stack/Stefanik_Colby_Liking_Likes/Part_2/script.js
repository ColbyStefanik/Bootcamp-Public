console.log("page loading...");

var likes = [9, 12, 9];
var likeDisplay = [
    document.querySelector("#post-1"),
    document.querySelector("#post-2"),
    document.querySelector("#post-3")
];

function like(id) {
    likes[id]++;
    likeDisplay[id].innerHTML = likes[id] + " like(s)";
}