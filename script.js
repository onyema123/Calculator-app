var display = document.getElementById("display");
console.log(display);

var button = Array.from(document.getElementsByClassName("button"));

button.map( button =>  {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText) {
            case 'C':
                display.innerText = '';
                break;
            case '=':
                display.innerText = eval(display.innerText);
                break;
            default:
                display.innerText += e.target.innerText;
        }
    
    });
});

alert("Hello,welcome to my web page!");