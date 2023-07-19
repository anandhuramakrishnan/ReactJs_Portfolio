// import "../src/Components/Navbar/Navbar";
import Navbar from "../src/Components/Navbar/Navbar";
import Slider from "../src/Components/Slider/Slider";
import "./App.css";
import RightDiv from "./Components/Rightdiv/RightDiv";
import Second_LeftDiv from "./Components/Second_LeftDiv/Second_LeftDiv";
import Second_RightDiv from "./Components/Second_Rightdiv/Second_RightDiv";
import Footer from "./Components/Footer/Footer";
import ThirdDiv from "./Components/ThirdDiv/ThirdDiv";

function App() {
  return (
    <div className="first_section">
      <Navbar />
      <div className="second_div">
        <Slider />
        <RightDiv />
      </div>
      <div
        className="third_div">
        <Second_LeftDiv />
        <Second_RightDiv />
      </div>
      <ThirdDiv/>
      <Footer/>
    </div>
  );
}

export default App;
