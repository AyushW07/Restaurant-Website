import "./App.css";
import Navbar from "./Components/molecules/Navbar/Navbar";
import About from "./Components/organism/About/About";
import Chef from "./Components/organism/Chef/Chef";
import Header from "./Components/organism/Header/Header";
import Menu from "./Components/organism/Menu/Menu";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Menu />
      <Chef/>
    </div>
  );
}

export default App;
