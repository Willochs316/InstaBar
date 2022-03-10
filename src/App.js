import NavBar from "./Components/NavBar";
import NavBarImages from "./Components/NavBarImages";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <NavBar figures={NavBarImages} />
    </div>
  );
}
