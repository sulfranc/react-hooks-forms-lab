import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [newItemData, setNewItemData] = useState({
    name: "",
    category: "Produce"
  });

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value
    setNewItemData({
      ...newItemData,
      [name]: value,
      id: uuid(),
    })
  }

  
  return (
    <form className="NewItem" 
      onSubmit={(event) => {
        event.preventDefault()
        onItemFormSubmit(newItemData)
    }}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleChange}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={handleChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;