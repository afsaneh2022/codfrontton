

let counter_element = document.body.querySelector("transact-col span");
let counter_value = counter_element.textContent;
counter_element.textContent = Number(counter_value) + 1;
console.log(counter_element);
