import "./App.css";
import Navbar from "./Components/molecules/Navbar/Navbar";
import About from "./Components/organism/About/About";
import Header from "./Components/organism/Header/Header";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
    </div>
  );
}

export default App;
