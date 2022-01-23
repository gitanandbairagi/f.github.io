
function func() {
    var flag = 0;
    email = document.getElementById("email").value;
    pwd1 = document.getElementById("pwd1").value;
    pwd2 = document.getElementById("pwd2").value;

    //check if the email contain @ symbol
    for(i = 0; i < email.length; i++)
    {
        if (email.charAt(i) == '@') {
            flag = 1;
        }
    }
    if (flag == 0) {
        alert("Please Enter a Valid Email.");
        exit();
    }
    //check if password contain more than or equal to 6 digits and is same in both the textboxes
    if (pwd1.toString().length >= 6) {
        if (pwd1 == pwd2) {
            alert("Account Created Successfully!");
        }
        else {
            alert("Password is Not Same, Please  Enter Again.");
        }
    }
    else {
        alert("Password is Less than 6 Digits\nPlease  Enter Again.");
    }

}

function vidCtr(){
    document.getElementById("vid").repeat();
    }


//function for Image Change
function changeImg() {
    if (document.getElementById("changeImg").scr = "images/marvel-right-top.jpg") {
        document.getElementById("changeImg").src = "images/drStrange.jpg";
    }
    else {
        document.getElementById("changeImg").scr = "images/marvel-right-top.jpg";
    }
}

function enDb() {
    document.getElementById("imgVid_1").style.visibility = "hidden";
    document.getElementById("imgVid_2").style.visibility = "visible";
}