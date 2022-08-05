let display = document.getElementById("display");
let buttons = Array.from(document.getElementsByClassName("buttons"))
buttons.map((btn) => {
    btn.addEventListener("click", (event) => {
        let key = event.target.innerText;
        if (key == "C") {
            display.innerText = "";
        } else if (key == "DEL") {
            if (display.innerText == "infinity") {
                display.innerText = "";
            }
            display.innerText = display.innerText.slice(0, -1);
        } else if (display.innerText.includes("(") && display.innerText.includes(")")) {
            if (display.innerText.includes("(") && display.innerText.includes(")")) {
                display.innerText = display.innerText.replace("(", "*")
                display.innerText = display.innerText.replace(")", "")
                display.innerText = eval(display.innerText)
            }
        }
        else if(key == "X!"){
            display.innerText = (display.innerText) =>{

            }
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