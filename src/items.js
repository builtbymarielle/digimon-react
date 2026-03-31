import { useState, useEffect } from "react";

export default function Items() {
  const [items, setItems] = useState([]);

  //on component mount... load data
  useEffect(() => {
    fetch("data/items.json")
      .then((result) => result.json())
      .then((data) => {
        //STORE DATA
        setItems(data);
      });
  }, []);

  //create out inventory list
  const itemsList = items.map((item) => <div key={item.id}>{items}</div>);

  return (
    <div>
      <h1>This Will be the title</h1>
      {itemsList}
    </div>
  );
}
