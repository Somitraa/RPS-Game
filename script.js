function rock(){
    let value = Math.floor(Math.random()*3);
    let s =0;

    if (value == s) {
        alert("tie");
    }
    else if (value == 1) {
        alert("Computer WON");
    }
    else{
        alert("You Won")
    }
}
function paper(){
    let value = Math.floor(Math.random()*3);
    let s =1;

    if (value == s) {
        alert("tie");
    }
    else if (value == 2) {
        alert("Computer WON");
    }
    else{
        alert("You Won")
    }
}
function scissor(){
    let value = Math.floor(Math.random()*3);
    let s =2;

    if (value == s) {
        alert("tie");
    }
    else if (value == 0) {
        alert("Computer WON");
    }
    else{
        alert("You Won")
    }
}
