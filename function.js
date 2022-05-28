

let counter = document.body.querySelector(".test1");
console.log(counter.textContent)

function get(){
    current=counter.textContent;
    current=Number(current);
    return current;
}
console.log(get());

function increement(){
    let current=get();
    let next=current + 1;
    counter.textContent=next;
}

setInterval(increement,1000)  ;
