import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [dynamicItemsArray, setDynamicItemsArray] = useState(items)

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearch(event) {
    setSearch(event.target.value);
  }  

  function onItemFormSubmit(newItem) {
    setDynamicItemsArray([...dynamicItemsArray, newItem])
  }

  let itemsToDisplay = dynamicItemsArray.filter((item) => {
    if (selectedCategory === "All") return true;
      return item.category === selectedCategory;
  })
    
  itemsToDisplay = dynamicItemsArray.filter((item) => {
    return item.name.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} />
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearch} search={search}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;