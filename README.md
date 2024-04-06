# Shopping List

## Text of the exercise
Dovete stampare la lista di spesa in pagina utilizzando ciclo while.
Rifacciamo l’esercizio visto insieme, ma questa volta con il ciclo while al posto del ciclo for. Facciamo attenzione a non dimenticare tutte le differenze implementative che il ciclo while ci impone, in particolare alla variabile di indice.

## Solution

### DATA COLLECTION

- [x] Define array for shopping list items. (shoppingList)

- [x] Get by Id list element. (shoppingListElem)

### LOGICAL EXECUTION

- [x] Define variable counter. (i)

- **WHILE** i < shoppingList.length

    - [x] Define const as shoppingList for each index of the array. (curShoppingItem)

    - [x] Create element "li" in doc. (listItemElem)

    - [x] Add class to listItemElem. (list-group-item)

    - [x] Add (curShoppingItem) in (listItemElem).

    - [x] Append (listItemElem) in (shoppingListElem).

    - **ADD EVENT** *Click* on (listItemElem)

        - [x] Toggle class to listItemElem. (done)