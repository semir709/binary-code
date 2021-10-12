let hour = document.getElementById('h');
let minute = document.getElementById('m');
let secend = document.getElementById('s');

function convertToBinary(number) {
    let array = [];
    let i = 0;
    let res = '';

    while(number > 0) {
        array[i] = number % 2;
        number = parseInt(number / 2, 10);
        i++;
    }

    while(array.length < 6) {
        array[i] = 0;
        i++;
    }

    for(let i = 5; i >= 0; i--) {
        res += array[i];
    }

    return res;
}

function changeColor(letter) {
    
    let text = letter.innerHTML;

    text = text.split('1').join('<span style="color: red;">1</span>');

    letter.innerHTML = text;  
}

function currentTime() {
    let date = new Date();

    hour.innerHTML = convertToBinary(date.getHours());
    minute.innerHTML = convertToBinary(date.getMinutes());
    secend.innerHTML = convertToBinary(date.getSeconds());

    changeColor(hour);
    changeColor(minute);
    changeColor(secend);

    
}

window.onload = () => {
    setInterval(currentTime, 1000);
}



