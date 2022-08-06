let display = document.getElementById("display");
let buttons = Array.from(document.getElementsByClassName("buttons"))
buttons.map((btn) => {
    btn.addEventListener("click", (event) => {
        let key = event.target.innerText;
        if (key == "C") {
            display.innerText = "";
        }
        else if (key == "DEL") {
            if (display.innerText == "infinity") {
                display.innerText = "";
            }
            display.innerText = display.innerText.slice(0, -1);
        }
        else if (display.innerText.includes("(") && display.innerText.includes(")")) {
            if (display.innerText.includes("(") && display.innerText.includes(")")) {
                display.innerText = display.innerText.replace("(", "*")
                display.innerText = display.innerText.replace(")", "")
                display.innerText = eval(display.innerText)
            }
        }
        else if (key == "X!") {
            display.innerText = factorial(display.innerText);

            function factorial(num) {
                let f = 1;
                for (let i = num; i > 0; i--) {
                    f *= i
                }
                return f
            }
        }
        else if(key == "x2"){
            display.innerText = (display.innerText)*(display.innerText)
        }
        else if(key == "∏"){
            display.innerText = 3.14*(display.innerText)*(display.innerText)
        }
        else if(key == "sin"){
            display.innerText = Math.sin(display.innerText)
        }
        else if(key == "√"){
            display.innerText = Math.sqrt(display.innerText)
        }
        else if(key == "cos"){
            display.innerText = Math.cos(display.innerText)
        }
        else if(key == "tan"){
            display.innerText = Math.tan(display.innerText)
        }
        else if(key == "log"){
            display.innerText = Math.log(display.innerText)
        }
        else if(key == "In"){
            display.innerText = Math.In(display.innerText)
        }
        else if(key == "rad"){
            display.innerText = Math.rad(display.innerText)
        }
        else if(key == "e"){
            display.innerText = Math.E(display.innerText)
        }
        else if (key == "=") {
            if (display.innerText) {
                display.innerText = eval(display.innerText)
            }
        }
        else {
            display.innerText += key;
        }
    })
})
















//     })
// })