var form1 = document.getElementById("form1");
var form2 = document.getElementById("form2");
var form3 = document.getElementById("form3");
var next1 = document.getElementById("next1");
var next2 = document.getElementById("next2");
var back1 = document.getElementById("back1");
var back2 = document.getElementById("back2");
var progress = document.getElementById("progress");

// onclick event handler - when the next button is clicked, the following code will be executed
next1.onclick = function () {
    // when next button is clicked, form1 will move to the left and will be hid from view
    form1.style.left = "-450px";
    // form2 will then move 40px to the left making it visible to the viewer
    form2.style.left = "40px";
    // change the width of the progress to 240px
    progress.style.width = "240px";
}

back1.onclick = function () {
    form1.style.left = "40px";
    form2.style.left = "450px";
    progress.style.left = "120px";
}

next2.onclick = function () {
    form2.style.left = "-450px";
    form3.style.left = "40px";
    progress.style.width = "360px";
}
back2.onclick = function () {
    form2.style.left = "40px";
    form3.style.left = "450px";
    progress.style.width = "240px";
}
