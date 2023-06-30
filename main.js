const addButton = document.querySelector("#addItem");
const listBlock = document.querySelector("#listBlock");
const groceryInput = document.querySelector("#groceryInput");

// Load saved grocery items from localStorage when the page loads
document.addEventListener("DOMContentLoaded", function () {
    const savedItems = localStorage.getItem("groceryItems");
    if (savedItems) {
        listBlock.innerHTML = savedItems;
        addClickEventListeners();
    }
});

groceryInput.addEventListener("keydown", function (event) {
    if (event.key == "Enter") {
        addPunct();
    }
});

addButton.addEventListener("click", addPunct);

function addPunct() {
    let item = document.createElement("h2");
    item.innerHTML = "- " + groceryInput.value;

    item.addEventListener("click", function () {
        if (item.style.textDecoration !== "line-through") {
            item.style.textDecoration = "line-through";
        } else {
            item.style.textDecoration = "none";
        }
    });

    listBlock.insertAdjacentElement("beforeend", item);
    groceryInput.value = "";

    localStorage.setItem("groceryItems", listBlock.innerHTML);
}

// Add click event listeners to all items in the list
function addClickEventListeners() {
    const items = document.querySelectorAll("h2");
    items.forEach(item => {
        item.addEventListener("click", function () {
            if (item.style.textDecoration !== "line-through") {
                item.style.textDecoration = "line-through";
            } else {
                item.style.textDecoration = "none";
            }
            
            const groceryItems = listBlock.innerHTML;
            localStorage.setItem("groceryItems", groceryItems);
        });
    });
}
