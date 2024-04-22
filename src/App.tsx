import "../src/components/Scss/main.scss";
import Navbar from "./components/Navbar/NavBar";
// import DragAndDrop from "./components/DragDrop/DragAndDrop";
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

//-------------------------------------Social Media Butten's---------------------------------------//

// const socialLinks = [
//   { className: "twitter", icon: "ri-twitter-line", href: "#" },
//   { className: "facebook", icon: "ri-facebook-line", href: "#" },
//   { className: "close", icon: "ri-close-line", href: "#" }, // För att stänga knap menyn
//   { className: "discord", icon: "ri-discord-line", href: "#" },
//   { className: "whatsapp", icon: "ri-whatsapp-line", href: "#" },
// ];

//------------------------------------------------------------------------------------------//

function App() {
  return (
    <>
      <Navbar GoToNavLink={GoToNavLink} />

      {/* <DragAndDrop /> */}
      <Card />
    </>
  );
}

export default App;
