import "./App.css";
import Banner from "./components/Banner";

function App() {
  return (
    <>
      <h2 className="text-3xl font-semibold text-accent  mb-20">Boast</h2>
      <div className="bg-primary px-3.5 sm:px-10 py-20">
        <Banner />
      </div>
    </>
  );
}

export default App;
