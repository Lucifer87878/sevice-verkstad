import "../src/components/Scss/main.scss";
import Navbar from "./components/Navbar/NavBar";
import ShareButton from "./components/ShareButton/ShareButton";
import DragAndDrop from "./components/DragDrop/DragAndDrop";
import Card from "./components/Cards/Card";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";

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
      {/* <ShareButton socialLinks={socialLinks} /> */}
      <DragAndDrop />
      <Card />
      {/* <Header /> */}
      {/* <Form /> */}
    </>
  );
}

export default App;
