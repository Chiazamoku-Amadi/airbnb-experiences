import "./App.css";
import Experiences from "./Components/Experiences/Experiences";
import Header from "./Components/Header/Header";
import Pictures from "./Components/Pictures/Pictures";
import Cards from "./Components/Cards/Cards";
import cardData from "../src/data";

function App() {
  const cards = cardData.map((card) => {
    return <Cards key={card.id} {...card} />;
  });

  return (
    <div>
      <Header />
      <Pictures />
      <Experiences />
      <section className="cards">{cards}</section>
    </div>
  );
}

export default App;
