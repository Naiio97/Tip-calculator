const form = document.querySelector('form')
const inputBill = document.querySelector('#bill-input')
const inputPeople = document.querySelector('#people-input')
const btnTip = document.querySelectorAll('#tips-btns button')
const tipInput = document.querySelector('#tip-input')
const tipAm = document.querySelector('#tip-amount')
const totalPr = document.querySelector('#total-price')
const reset = document.querySelector('#reset')
const error = document.querySelector('.error')
let bill = 0
let peoples = 1
let customTips = 0
let tip = 0

inputBill.addEventListener('keyup', (e) => {
    bill = inputBill.value
    bill === "" ? bill = 0 : bill = parseFloat(bill)
    CalTotal()
})

inputPeople.addEventListener('keyup', (e) => {
    peoples = inputPeople.value
    if (peoples === "" || peoples === 0) {
        error.classList.remove('hidden')
        inputPeople.style.border = "2px solid red"
    } else {
        error.classList.add('hidden')
        inputPeople.style.border = ""
    }
    CalTotal()
});

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

tipInput.addEventListener('change', (e) => {
    console.log(tipInput.value);
})



const CalTotal = () => {
    let totalDiv = bill / peoples 
    let tipDiv = tip
    totalPr.innerHTML = "$"+ totalDiv.toFixed(2)
    tipAm.innerHTML = "$"+ tipDiv.toFixed(2)
}
