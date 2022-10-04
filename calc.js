const display = document.getElementById("display");
let switchbtn = document.getElementById("switch");
const body = document.querySelector("body")
const btn = document.querySelectorAll("button")
const colored = document.getElementsByClassName ("color")
const delAll = document.getElementById("clrAll")


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
        btn.forEach((element)=>{
            element.style.background= "rgb(36, 36, 36)"
            element.style.color = "#fff"
        })


    }else{
        calculator.style.background = "#fff"
        body.style.background = "#fff"
        btn.forEach((element)=>{
            element.style.background= "#fff"
            element.style.color = "#000"
        })

    }
})