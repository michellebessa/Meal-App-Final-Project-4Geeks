import React, { useState } from "react";

export const DailyMeal = (props) => {
  const [list, setList] = useState([]);

  const [inputValue, setInputValue] = useState("");

  const addItemsList = (e) => {
    e.preventDefault();
    setList([...list, inputValue]);
    setInputValue("");
  };
  const removeItem = (index) => {
    let newList = list.filter((item, idx) => idx !== index);

    setList(newList);
  };

  return (
    <>
      <div className="text-center">
        <h1 className="tittle">Meals</h1>
        <form onSubmit={addItemsList}>
          <input
            type="text"
            className="inputmealplanner"
            placeholder={`What are you having for ${props.meal}`}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </form>

        {list.map((ListItem, index) => {
          return (
            <li className="list-group-item" key={index}>
              {ListItem}{" "}
              <button onClick={() => removeItem(index)}>
                <i class="fas fa-trash"></i>
              </button>
            </li>
          );
        })}
      </div>
    </>
  );
};

export default DailyMeal;
