import { useState } from 'react';
import "../src/components/Scss/main.scss";
import Navbar from "./components/Navbar/NavBar";
import Card from "./components/Cards/Card";
import DropDownMenu from "./components/DropdownMenu/DropdownMenu"; // Importera DropDownMenu-komponenten
import * as jsonData from './components/ServiceData'; // Importera index.ts där JSON-filerna exporteras

//-------------------------------------------NavBar-----------------------------------------------//
const GoToNavLink = [
  { Text: "Home", href: "/#" },
  { Text: "Planering", href: "/#" },
  { Text: "Service Protokol", href: "/#" },
  { Text: "Different services", href: "/#" },
  { Text: "Cooperate with oss", href: "/#" },
];

//------------------------------------------------------------------------------------------//

function App() {

  return (
    <>
      <Navbar GoToNavLink={GoToNavLink} />
      <Card />
    </>
  );
}

export default App;
