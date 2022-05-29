
//    get grom html code 
 let counter = document.body.querySelector(".transact-count");

function get(){
    current=counter.textContent;
    current=Number(current);
    return current;
}
let current=58281750 
function increement(){
    current++ ;
    counter.textContent=current;
}
setInterval(increement,1000)  ;
