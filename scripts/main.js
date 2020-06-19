let myImage = document.querySelector('img');

myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/terraria-corruption-logo.png') {
        myImage.setAttribute('src', 'images/terraria-hallowed-logo.png');
    } else if (mySrc === 'images/terraria-hallowed-logo.png') {
        myImage.setAttribute('src', 'images/terraria-jungle-logo.png');
    } else if (mySrc === 'images/terraria-jungle-logo.png') {
        myImage.setAttribute('src', 'images/terraria-underground-logo.png');
    } else {
        myImage.setAttribute('src', 'images/terraria-corruption-logo.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('请输入你的名字。');
    if (!myName || myName === null) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.innerHTML = 'Mozilla 酷毙了，' + myName;
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
}

myButton.onclick = function () {
    setUserName();
}