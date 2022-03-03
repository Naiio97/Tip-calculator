const form = document.querySelector('form')
const inputBill = document.querySelector('#bill-input')
const inputPeople = document.querySelector('#people-input')
const btnTip = document.querySelectorAll('#tips-btns button')
const tipAm = document.querySelector('#tip-amount')
const totalPr = document.querySelector('#total-price')
const reset = document.querySelector('#reset')
const error = document.querySelector('.error')

inputBill.addEventListener('change', (e) => {
    // e.preventDefault()
    let bill = e.target.value
    bill === "" ? bill = 0 : bill = parseFloat(bill)
    console.log(bill);
})

inputPeople.addEventListener('change', (e) => {
    // let peoples = e.target.value
   if(inputPeople.value === 0 || inputPeople.value === ""){
        error.classList.remove('hidden')
        inputPeople.style.border = "2px solid red"
        
        console.log(inputPeople.value);
   }
    

   
   
})
