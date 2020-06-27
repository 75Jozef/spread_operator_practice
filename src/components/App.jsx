import React, { useState } from "react";

function App() {
  const [text, updateText] = useState("");
  const [array, updateArray] = useState([]); // state môže byť aj pole aj objekt; v tomto prípade si spravím pole;

  function handleChange(event) {
    const input = event.target.value;
    updateText(input);
  }

  function addItem() {
    updateArray(prevItems => {
      return [...prevItems, text]; //zavolám si funkciu na update state a vrátim mu cez return novú hodnotui; teraz predošlé a ku nim ako nová položka v poli vznikne text uložený v text; dá sa uložiť aj bez previous items, ale toto je ES6 funkcionalita, takže je to takto easy ;)
    });
    updateText(""); //aby sa vymazal text po zadaní do listu
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          onChange={handleChange}
          name="item"
          type="text"
          autoComplete="off"
          value={text}
        />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {array.map(item => (
            // tak úplne som zabudol na pole.map funkcionalitu reactu a to som teda trubka; takto ľahko môže renderovať akékoľvek pole ako li položky zoznamu;
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
