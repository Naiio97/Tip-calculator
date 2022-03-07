const form = document.querySelector('form')
const inputBill = document.querySelector('#bill-input')
const inputPeople = document.querySelector('#people-input')
const btnTip = document.querySelectorAll('#tips-btns button')
const tipAm = document.querySelector('#tip-amount')
const totalPr = document.querySelector('#total-price')
const reset = document.querySelector('#reset')
const error = document.querySelector('.error')
let bill = 0
let peoples = 1
let customTips = 0

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
            return bill / peoples * 0.05
            
        }else {
            console.log("nefunguje");
        }
        
    })
   
}






const CalTotal = () => {
    let tipDiv = bill / peoples 
    totalPr.innerHTML = "$"+ tipDiv.toFixed(2)
}











//Error message
// inputPeople.addEventListener('change', (e) => {
//     if(inputPeople.value === "0" || inputPeople.value === ""){
//         error.classList.remove('hidden')
//         inputPeople.style.border = "2px solid red"
//     }else{
//         peoples = inputPeople.value
//         error.classList.add('hidden')
//         inputPeople.style.border = ""
        
//     }

//     console.log(inputPeople.value);
// })


// for (const button of btnTip) {
//     btnTip.addEventListener('submit', (e) => {
//         e.preventDefault()

//     })
// }


// const calc = (tip, total) => {
//     if (tip === "0"){
//         return (total - bill)
//     } else {
//         for (const button of btnTip) {
//             if (button.classList.item(0) === tip){
//                 button.classList.add("active")
//             } else {
//                 button.classList.remove("active")
//             }
//         }

//         switch (tip) {
//             case "btn5":
//               total = bill * 0,05
//             break;
//             case "btn10":
//                 total = bill * 0,1
//             break;
//             case "btn15":
//                 total = bill * 0,15
//             break;
//             case "btn25":
//                 total = bill * 0,25
//             break;
//             case "btn50":
//                 total = bill * 0,50
//             break;
//             default:
//                 console.log(tip)
//                 // total = total + total*tip*0.01;
//                 break;
//         }

//     }
// }