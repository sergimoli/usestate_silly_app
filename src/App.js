import "./App.css";
import YearStuff from "./components/YearStuff";

function App() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div>
        <YearStuff currentYear={currentYear} />
      </div>
    </>
  );
}

export default App;
