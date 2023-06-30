const addButton = document.querySelector("#addItem");
const listBlock = document.querySelector("#listBlock");
const groceryInput = document.querySelector("#groceryInput");

groceryInput.addEventListener("keydown", function (event) {
    if (event.key == "Enter") {
        addPunct()
    }
})

addButton.addEventListener("click", addPunct);

function addPunct() {
    let item = document.createElement("h2");
    item.innerHTML = "- " + groceryInput.value;

    item.addEventListener("click", function () {
        if (item.style.textDecoration !== "line-through") {
            item.style.textDecoration = "line-through";
        }else{
            item.style.textDecoration = "none";
        }
    })

    listBlock.insertAdjacentElement("beforeend", item);

    groceryInput.value = "";
}