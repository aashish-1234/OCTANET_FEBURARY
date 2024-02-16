
//action perform when submit is clicked.
function event_perform() {

    
    let input_data=document.querySelector("#input");
    if(input_data.value!=""){
        let fragment = document.createDocumentFragment();
    let span_element = document.createElement("span");
    span_element.textContent = input_data.value;

    let btn = document.createElement("button");
    btn.innerText="delete";

    //add id's to button and span
    span_element.setAttribute("id","span_format");
    btn.setAttribute("id","delete");
    
    fragment.appendChild(span_element);
    fragment.appendChild(btn);
        
    let div_container =document.querySelector(".list_container");
    div_container.appendChild(fragment);
    //div_container.appendChild(fragment);
    input_data.value='';
    
    btn.addEventListener('click', function () {
        var a = confirm("Are you sure you want to delete?");
        if (a == true) {
            let span1=document.getElementById("span_format");
            let delete1=document.getElementById("delete");
            div_container.removeChild(span1);
            div_container.removeChild(delete1);
        }
    });
    }
    
}







