const shoppingList = ["pane", "pasta", "frutta", "detersivo", "dentifricio"]

console.log("ShoppingList", shoppingList);

let shoppingListElem = document.getElementById("shopping-list");

console.log(shoppingListElem);


let i = 0;

while (i < shoppingList.length) {

    const curShoppingItem = shoppingList[i]; // string

    console.log(curShoppingItem);

    const listItemElem = document.createElement("li"); // object

    listItemElem.classList.add("list-group-item")

    listItemElem.innerHTML = curShoppingItem;

    console.log(listItemElem);

    listItemElem.addEventListener("click", function() {

        listItemElem.classList.toggle("active");

    });

    shoppingListElem.append(listItemElem);

    i++

};