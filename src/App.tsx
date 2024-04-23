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
  const [selectedData, setSelectedData] = useState<any[]>([]);

  // Funktion för att hantera när en fil väljs från DropDownMenu
  const handleSelectFile = (fileName: string) => {
    // Kontrollera vilken fil som valdes och hämta rätt data från index.ts
    switch (fileName) {
      case 'AutosanBuss_1500':
        setSelectedData(jsonData.AutosanBuss_1500);
        break;
      case 'AutosanBuss_3000':
        setSelectedData(jsonData.AutosanBuss_3000);
        break;
      // Fortsätt med andra fall för alla filer
      default:
        setSelectedData([]); // Återställ till tom array om inget matchat
    }
  };

  return (
    <>
      <Navbar GoToNavLink={GoToNavLink} />
      {/* Lägg till DropDownMenu och skicka handleSelectFile som en prop */}
      <DropDownMenu onSelectFile={handleSelectFile} />
      {/* Skicka den valda datan som en prop till Card */}
      <Card data={selectedData} />
    </>
  );
}

export default App;
