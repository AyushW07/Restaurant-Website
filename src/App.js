import "./App.css";
import Navbar from "./Components/molecules/Navbar/Navbar";
import About from "./Components/organism/About/About";
import Header from "./Components/organism/Header/Header";
import Menu from "./Components/organism/Menu/Menu";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Menu />
    </div>
  );
}

export default App;
