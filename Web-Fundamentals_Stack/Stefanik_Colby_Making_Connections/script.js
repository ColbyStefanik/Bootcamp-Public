console.log("page loading...");

var conReqNum = 2;
var userConNum = 500;
var profileEdit = document.querySelector("#user-name");
var conReq = document.querySelector("#con-req");
var userCon = document.querySelector("#con-num");
var conReqElement = [
    document.querySelector("#cr-1"),
    document.querySelector("#cr-2"),
];

function editUserProfile() {
    profileEdit.innerHTML = "Gaben";
};

function declineConReq(id) {
    conReqNum --;
    conReq.innerHTML = conReqNum;
    conReqElement[id].remove(id);
};

function acceptConReq(id) {
    conReqNum --;
    userConNum ++;
    conReq.innerHTML = conReqNum;
    userCon.innerHTML = userConNum + "+";
    conReqElement[id].remove(id);
};