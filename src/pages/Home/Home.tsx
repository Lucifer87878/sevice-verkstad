import React from "react";
import "./Home.scss"; 

const Home: React.FC = () => {
  return (
    <div className="home-container"> {/* Använd SCSS-klassen här */}
      <video autoPlay loop muted>
        <source src="../src/pages/Home/video/Hero1.mp4" type="video/mp4" />
      </video>
       <div className="Text1">
        <h1>Välkommna Till Jobet.!</h1>
        <h2>Börja dagen med en kopp kaffe...!</h2>
        <h3>Sen kan vi kolla vad skall göras</h3>
        <p>Så här är strat sidan där vi kommer att kunna gåvidare i från</p>
      </div>
    </div>
  );
};

export default Home;
