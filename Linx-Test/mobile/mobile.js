/*Checking if the name has only white spaces, with email we don't need because submit would block if the value in
text box doesn't correspond to the type of the input.*/
function checkNameFriend(){

    const nameBox = document.getElementById('name-friend').value;

    if (!nameBox.replace(/\s/g, '').length) {
        alert("Insira um nome por gentileza");
        return false;
    }
}