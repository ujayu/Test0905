function f1() {
    var usr = document.getElementById("t1")
    var pwd = document.getElementById("t2")
    if(usr.value=="" || pwd.value=="")
        window.alert("USERNAME OR PASSWORD is empty.")
}
function f2(){
    var usr = document.getElementById("t1")
    var pwd = document.getElementById("t2")
    usr.value=""
    pwd.value=""
}