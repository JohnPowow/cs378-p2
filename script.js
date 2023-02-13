
let breakfast_button = document.getElementById('b-amount')
let tacos_button = document.getElementById('t-amount')
let lasagna_button = document.getElementById('l-amount')
let pasta_button = document.getElementById('p-amount')
let total_button = document.getElementById('total-amount')

let add_buttons = document.querySelectorAll('.btn-add')
add_buttons.forEach((button) => {
    button.addEventListener('click', increaseButton)
  })

let decrease_buttons = document.querySelectorAll('.btn-dec')
decrease_buttons.forEach((button) => {
    button.addEventListener('click', decreaseButton)
  })

document.getElementById('order').addEventListener('click', orderButton)
document.getElementById('clear').addEventListener('click', clearButton)


function increaseButton()
{
   let food_type = this.id
   let food_button
   let cost = 0

   if(food_type === 'b-increase') {
    food_button = breakfast_button
    cost = parseInt(document.getElementById('b-cost').innerHTML.trim().substring(1))
   } else if(food_type === 't-increase') {
    food_button = tacos_button
    cost = parseInt(document.getElementById('t-cost').innerHTML.trim().substring(1))
   } else if(food_type === 'l-increase') {
    food_button = lasagna_button
    cost = parseInt(document.getElementById('l-cost').innerHTML.trim().substring(1))
   } else {
    food_button = pasta_button
    cost = parseInt(document.getElementById('p-cost').innerHTML.trim().substring(1))
   }

   food_button.innerHTML = parseInt(food_button.innerHTML) + 1
   total_button.innerHTML =  parseInt(total_button.innerHTML) + cost
}  

function decreaseButton()
{
   let food_type = this.id
   let food_button
   let cost = 0

   if(food_type === 'b-decrease') {
    food_button = breakfast_button
    cost = parseInt(document.getElementById('b-cost').innerHTML.trim().substring(1))
   } else if(food_type === 't-decrease') {
    food_button = tacos_button
    cost = parseInt(document.getElementById('t-cost').innerHTML.trim().substring(1))
   } else if(food_type === 'l-decrease') {
    food_button = lasagna_button
    cost = parseInt(document.getElementById('l-cost').innerHTML.trim().substring(1))
   } else {
    food_button = pasta_button
    cost = parseInt(document.getElementById('p-cost').innerHTML.trim().substring(1))
   }

   console.log(cost)

   let food_price = parseInt(food_button.innerHTML)
   if(food_price != 0) {
    food_button.innerHTML = food_price - 1
    total_button.innerHTML =  parseInt(total_button.innerHTML) - cost
   }
}

function orderButton() {
    if (parseInt(total_button.innerHTML) === 0) {
        alert("Empty Cart.")
    } else {
        let message = "Order placed!\n";
        if (parseInt(breakfast_button.innerHTML) !== 0) {
            message += `${breakfast_button.innerHTML} breakfast plate(s), `
        }
        if (parseInt(tacos_button.innerHTML) !== 0) {
            message += `${tacos_button.innerHTML} taco(s), `
        }
        if (parseInt(lasagna_button.innerHTML) !== 0) {
            message += `${lasagna_button.innerHTML} lasagna(s), `
        }
        if (parseInt(pasta_button.innerHTML) !== 0) {
            message += `${pasta_button.innerHTML} pasta(s), `
        }
        alert(message.substring(0, message.length - 2))
    }
}

function clearButton() {
    breakfast_button.innerHTML = 0
    tacos_button.innerHTML = 0
    lasagna_button.innerHTML = 0
    pasta_button.innerHTML = 0
    total_button.innerHTML = 0
}  