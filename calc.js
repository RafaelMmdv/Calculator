const display = document.getElementById("display");
let switchbtn = document.getElementById("switch");
const body = document.querySelector("body")
function hesabla() {
    display.value = eval(display.value)
}

function yaz(x) {
    display.value += x
} 

function back() {
display.value = display.value.substring(0, display.value.length - 1);
}

function clr() {
    display.value = ""
}


switchbtn.addEventListener("click", ()=>{
    if(switchbtn.checked == true){
        calculator.style.background = "rgb(36, 36, 36)"
        body.style.background = "#000"
    }else{
        calculator.style.background = "#fff"
        body.style.background = "#fff"
    }
})