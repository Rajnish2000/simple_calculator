console.log('this is calculator project in javascript');

let screen = document.getElementById("screen");
let buttons = document.querySelectorAll("button");
var screenValue = "";
for (const button of buttons) {
    button.addEventListener('click', (e) => {
        let buttonText = e.target.innerText;
        console.log(buttonText);
        if (buttonText == 'X') {
            buttonText = "*";
            screenValue += buttonText;
            screen.value = screenValue;
        } else if (buttonText == 'C') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            screenValue = eval(screenValue);
            screen.value = screenValue;
        } else if (buttonText == '-->') {
            console.log('nahi aa rha');
        } else if (buttonText == 'root') {
            var val = Math;
            screenValue = val.sqrt(screenValue);
            screen.value = screenValue;
        } else if (buttonText == 'log') {
            screenValue = Math.log(screenValue);
            screen.value = screenValue;
            
            
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }
    });
}