

let counter = document.body.querySelector(".transact-count");

function get(){
    current=counter.textContent;
    current=Number(current);
    return current;
}

function increement(){
    let current=get();
    let next=current + 1;
    counter.textContent=next;
}

setInterval(increement,1000)  ;
