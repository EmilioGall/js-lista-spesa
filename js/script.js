const shoppingList = ["bread", "pasta", "pears", "tomatoes", "cabbage"];

console.log("ShoppingList", shoppingList);

let shoppingListElem = document.getElementById("shopping-list");

console.log(shoppingListElem);


let i = 0;

while (i < shoppingList.length) {

    const curShoppingItem = shoppingList[i]; // string

    console.log(curShoppingItem);

    // Print List on HTML - START
    const listItemElem = document.createElement("li"); // object

    listItemElem.classList.add("list-group-item");

    listItemElem.innerHTML = curShoppingItem;

    console.log(listItemElem);

    listItemElem.addEventListener("click", function() {

        listItemElem.classList.toggle("active");

    });

    shoppingListElem.append(listItemElem);
    // Print List on HTML - END

    i++

};

// New Item Input Form

let newListItemInput = document.getElementById("new-list-item");

const inputForm = document.getElementById("shopping-form");

inputForm.addEventListener ("submit", function(e) {

    e.preventDefault() // Prevent default behaviour of form tag

    const newListItem = newListItemInput.value;

    shoppingList.push(newListItem)

    // Print List on HTML - START
    const listItemElem = document.createElement("li"); // object

    listItemElem.classList.add("list-group-item");

    listItemElem.innerHTML = newListItem;

    console.log(listItemElem);

    listItemElem.addEventListener("click", function() {

        listItemElem.classList.toggle("active");

    });

    shoppingListElem.append(listItemElem);
    // Print List on HTML - END

});

