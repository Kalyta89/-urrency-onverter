import { Fragment, useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header/header";
import MainSection from "./components/main-section.js/mainSection";

function App() {
  const [items, setItems] = useState();

  useEffect(() => {
    fetch("https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5")
      .then((data) => data.json())
      .then((data) => {
        setItems(data);
      });
  }, []);
  // console.log(items);
  return (
    <Fragment>
      <Header items={items} />
      <MainSection items={items} />
    </Fragment>
  );
}

export default App;
