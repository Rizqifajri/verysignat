import About from "./components/About";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Jumbotron from "./components/Jumbotron";
import NavigationBar from "./components/NavigationBar";
import OurTeamCard from "./components/OurTeamCard";
import "./App.css";

function App() {
  return (
    <>
      <Jumbotron />
      <About />
      <Feature />
      <OurTeamCard />
      <Footer />
    </>
  );
}

export default App;
