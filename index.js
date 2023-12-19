const deletedList = document.getElementsByTagName("LI");

for (let i = 0; i < deletedList.length; i++) {
    const span = document.createElement("SPAN");
    const newText = document.createTextNode("Remove");
    span.className= "removeBtn";
    span.appendChild(newText);
    deletedList[i].appendChild(span);
} 
 

const delButton = document.getElementsByClassName("removeBtn");

for (let i = 0; i < delButton.length; i++) {
    delButton[i].onclick = function() {
        const div = this.parentElement;
        div.style.display = "none";
    }
}

const list = document.querySelector("ul");

list.addEventListener("click", function(ev) {
    if (ev.target.tagName === "LI") {
        ev.target.classList.toggle("checked");
    }
}, false);

function addElement() {
    const li = document.createElement("li");
    const userInput = document.getElementById("userInput").value;
    const newText = document.createTextNode(userInput);

    li.appendChild(newText);

    if (userInput === "") {
        alert("Blank!, Kindly input something");
    } else {
        document.getElementById("myList").appendChild(li);
    }

    document.getElementById("userInput").value = "";

    const span = document.createElement("SPAN");
    const txt = document.createTextNode("Remove");
    span.className= "removeBtn";
    span.appendChild(txt);
    li.appendChild(span);

    for (let i = 0; i < removeBtn.length; i++) {
        removeBtn[i].onclick = function() {
            const div = this.parentElement;
            div.style.display = "none";
        }
    }
}