var myHeading = document.querySelector('h1');
var myButton = document.querySelector('button');
//myHeading.innerHTML = "hello world";

myButton.onclick = function(){
    setUserName();
}
function setUserName(){
    var myName = prompt('input ur name');
    //localStorage.setItem('name', myName);
    myHeading.innerHTML = myName;
}