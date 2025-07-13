import { useState } from "react";

export default function GroceryСart() {
  const [prodict, setProdict] = useState("");
  const [add, setAdd] = useState([]);

  const funcProdict = (e) => {
    setProdict(e.target.value);
  };

  const funcAdd = () => {
    if (prodict && prodict.trim()) {
      setAdd([...add, prodict]);
      setProdict("");
    }
  };

  const funcDelete = (indexToRemove) => {
    const newArray = add.filter((index, currentIndex) => {
      return currentIndex !== indexToRemove;
    });

    setAdd(newArray);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      funcAdd();
    }
  };

  return (
    <div className="grocery-cart">
      <h2>Список продуктов</h2>
      <div className="input-container">
        <input
          className="prodict_input"
          value={prodict}
          onChange={funcProdict}
          onKeyPress={handleKeyPress}
          placeholder="Название покупки"
          type="text"
        />
        <button className="prodict_button" type="button" onClick={funcAdd}>
          Добавить в список
        </button>
      </div>

      <div className="products-list">
        {add.map((item, index) => (
          <div key={index} className="product-item">
            <span className="product-name">Продукт: {item}</span>
            <button className="delete-btn" onClick={() => funcDelete(index)}>
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
