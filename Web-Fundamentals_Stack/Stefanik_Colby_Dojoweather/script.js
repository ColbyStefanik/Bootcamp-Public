console.log("page loading...");

var cookieDiv = document.querySelector(".cookie-policy");

function loading() {
    alert("Loading weather report...")
}

function accept() {
    cookieDiv.remove();
}

function celToFahr(temp) {
    return Math.round(9 / 5 * temp + 32);
}

function fahrToCel(temp) {
    return Math.round(5 / 9 * (temp - 32));
}

function convert(element) {
    console.log(element.value);
    for(var i=1; i<9; i++) {
        var tempSpan = document.querySelector("#temp" + i);
        var tempVal = parseInt(tempSpan.innerText);
        if(element.value == "°C") {
            tempSpan.innerText = fahrToCel(tempVal);
        } else {
            tempSpan.innerText = celToFahr(tempVal);
        }
    }
}