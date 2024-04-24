import "../src/components/Scss/main.scss";
import Navbar from "./components/Navbar/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Planering from "./pages/Planering/Planering";
import ServiceProtokol from "./pages/ServiceProtokol/ServiceProtokol";
import DifferentServices from "./pages/DifferentServices/DifferentServices";
import CooperateWithOss from "./pages/CooperateWithOss/CooperateWithOss";
import Card from "./components/Cards/Card";
import DragAndDrop from "./components/DragDrop/DragAndDrop";
import Footer from "./components/Footer/Footer";

const GoToNavLink = [
  { Text: "Home", Path: "/" },
  { Text: "Planering", Path: "/planering" },
  { Text: "Service Protokol", Path: "/service-protokol" },
  { Text: "Different services", Path: "/different-services" },
  { Text: "Cooperate with oss", Path: "/cooperate-with-oss" },
];

function App() {
  return (
    <>
      <Router>
          <Navbar GoToNavLink={GoToNavLink} />
          <Routes>
            <Route path="/" element={
            <>
            <Home />
            </>
            } />
            <Route path="/planering" element={
              <>
              <Planering />
              {/* <DragAndDrop /> */}
              </>
            } />
            <Route path="/service-protokol" element={
                <>
                  <Card />
                  <ServiceProtokol />
                  <Footer />
                </>
              }
            />
            <Route path="/different-services" element={<DifferentServices />} />
            <Route path="/cooperate-with-oss" element={<CooperateWithOss />} />
          </Routes>
      </Router>
    </>
  );
}

export default App;
