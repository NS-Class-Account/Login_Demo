var firstnameEl = document.getElementById('firstname');
var lastnameEl = document.getElementById('lastname');
var badgenumberEl = document.getElementById('badgenumber');
//Displays the user inputted information followed by an alert if over 20 characters.
function checkuserinput() {
    var username= firstnameEl.value + " " + lastnameEl.value;
    if (username.length > 20) {
        alert("User name contains too many characters, max 19");
        return;
    }
    //Checks for user number, if incorrect the alert displays.
    var badgeint= parseInt(badgenumberEl.value);
    if (isNaN(badgeint)) {
        alert("Must contain numbers only");
        return;
    }
    //Gives the alert if the numbers are over 999.
    if (badgeint > 999){
        alert("Badge number contains too many numbers, max 3");
        return;
    }
    //Displays the information inputted to the user.
    alert(username);
}