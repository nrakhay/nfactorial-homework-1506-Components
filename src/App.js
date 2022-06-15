import { useState } from "react";
import { DefaultContext } from "./Context";
import { ChangeTheme } from "./Context";

//импортируем стили
import "./App.css";

import { Header } from "./components/header";
import { Content } from "./components/content";
import { Footer } from "./components/footer";

export default function App() {
  const [fan, setFan] = useState("");
  // const [theme, setTheme] = useState("");

  const handleCreateFan = ({ name }) => {
    setFan(name);
  };

  // const handleChangeTheme = () => {};

  return (
    <DefaultContext.Provider value={{ handleCreateFan }}>
      <Header fan={fan} />
      <hr />
      <Content />
      <Footer />
    </DefaultContext.Provider>
  );
}
