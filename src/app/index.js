import React from 'react';
import './index.css';
import {Promo} from "components/Promo";
import {NavTab} from "components/NavTab";

const App = () => {
  return (
    <>
      <Promo/>
      <NavTab
        links={[
          { text: "О проекте", href: "#aboutProject" },
          { text: "Технологии", href: "#techs" },
          { text: "Студент", href: "#aboutMe" },
        ]}
      />
    </>
  );
}

export default App;
