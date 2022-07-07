import "./App.css";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import { CardUi } from "./components/UI/card/CardUi";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <CardUi />
    </div>
  );
}

export default App;
