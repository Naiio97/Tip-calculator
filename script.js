const form = document.querySelector('form')
const inputBill = document.querySelector('#bill-input')
const inputPeople = document.querySelector('#people-input')
const btnTip = document.querySelectorAll('#tips-btns button')
const tipInput = document.querySelector('#tip-input')
const tipAm = document.querySelector('#tip-amount')
const totalPr = document.querySelector('#total-price')
const error = document.querySelector('.error')
const reset = document.querySelector('#reset')
reset.disabled =true

let bill = 0
let peoples = 1
let customTips = 0
let tip = 0


//Zachycení celkové hodnoty
inputBill.addEventListener('keyup', (e) => {
    bill = inputBill.value
    reset.disabled = false;
    CalTotal()
})

//Zachycení počtu lidí
inputPeople.addEventListener('keyup', (e) => {
    peoples = inputPeople.value
    reset.disabled = false;
    if (peoples === "" || peoples === "0") {
        error.classList.remove('hidden')
        inputPeople.style.border = "2px solid red"
    } else {
        error.classList.add('hidden')
        inputPeople.style.border = ""
    }
    CalTotal()
});

//Button's tip
for (const button of btnTip ){
    button.addEventListener('click', (e) => {
        e.preventDefault()
        let btn = Array.from(btnTip)
        if(button === btn[0]){
            tip = bill / peoples * 0.05         
        }else if (button === btn[1]){
            tip = bill / peoples * 0.10     
        }else if (button === btn[2]){
            tip = bill / peoples * 0.15 
        }else if (button === btn[3]){
            tip = bill / peoples * 0.25    
        }else {
            tip = bill / peoples * 0.50    
        }
        CalTotal()
    })    
}

//Input tip
tipInput.addEventListener('keyup', (e) => {
    if(tipInput.value) {
        tip = tipInput.value / 100 * bill
    }
    CalTotal()
})


//Funkce na vypisování výsledku
const CalTotal = () => {
    let totalDiv = bill / peoples 
    let tipDiv = tip
    totalPr.innerHTML = "$"+ totalDiv.toFixed(2)
    tipAm.innerHTML = "$"+ tipDiv.toFixed(2)
}

//Nastavení tlačítka return



reset.addEventListener('click', (e) => {
    e.preventDefault()
    CalTotal ()
    inputBill.value = 0
    inputPeople.value = 0
    totalPr.innerHTML = "$0.00"
    tipAm.innerHTML = "$0.00"
    reset.disabled = true
})