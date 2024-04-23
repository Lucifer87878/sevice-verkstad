import "../src/components/Scss/main.scss";
import Navbar from "./components/Navbar/NavBar";
import Card from "./components/Cards/Card";


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
