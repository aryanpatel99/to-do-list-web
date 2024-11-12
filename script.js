const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li"); /*to create a new li element*/
        li.innerHTML=inputBox.value;  /*to set the value of the li element to the value of the input box*/
        listContainer.appendChild(li); /*to append  and display the li element to the list container*/
        let span = document.createElement("span");
        span.innerHTML="\u00d7"; /*to create a cross symbol*/
        li.appendChild(span);  /*to append the span element to the li element*/
    }
    inputBox.value = '';
    saveData();     /*to save the data in the local storage*/
}
listContainer.addEventListener("click", function(e){
    if (e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);  /*to prevent the default behavior of the event*/

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML)
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();