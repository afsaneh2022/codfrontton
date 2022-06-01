
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

let tab_elements=document.body.querySelectorAll(".tab");
let content_elements=document.body.querySelectorAll(".tab-content");

tab_elements.forEach(function tab_iterator(item,index){
    console.log(item);
    item.addEventListener("click",function onclick(e){
        tab_elements.forEach((el)=>{
            el.classList.remove("selected");
        })
        let selected_el= e.target;
        selected_el.classList.add("selected");

        let content_index=content_elements[index];
        content_elements.forEach((elc)=>{
            elc.classList.remove("show");
        })
        content_index.classList.add("show");

        console.log(content_index);

});
});


// for (let i ;i<tab_elements.length;i++){
// let item =tab_elements[i];
// }

