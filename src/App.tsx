import { useContext } from "react";
import "./App.scss";
import Header from "./components/Header";
import Portfolio from "./pages/Portfolio";
import { GlobalContext } from "./context/GlobalContext";

function App() {
  const { theme } = useContext(GlobalContext);

  return (
    <div className="App">
      <div className="appWrapper">
        <Header />
        <Portfolio />
      </div>
      <style>{`
        body {
          background: ${theme ? "#fff" : "#0c151d"};
        }
      `}</style>
    </div>
  );
}

export default App;
