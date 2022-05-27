

let counter_el = document.body.querySelector(".test1");

function increemen ( counter_el){
    let counter_value = counter_el.textContent;
    counter_el.texContent = Number(counter_value) + 1;
    return(counter_el)
}



console.log(counter_el);
setInterval(counter_el.texContent,1000);
