import "./App.css";
import Navbar from "./components/Navbar";
const linksArray = ["Products", "Services", "Overview", "Contact Us"];

function App() {
  return (
    <div>
      <Navbar links={linksArray} />
      <div className="content">
        <h2 className="text">Hamburger Menu with Material UI </h2>
      </div>
    </div>
  );
}

export default App;
