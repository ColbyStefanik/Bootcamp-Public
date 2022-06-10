console.log("page loaded...");

function message() {
    alert("Ninja was liked!");
}

function hideNewBtn(element) {
    element.remove();
}

function login(element) {
    if(element.innerText == "Login") {
        element.innerText = "Logout";
    }
    else {
        element.innerText = "Login";
    }
}