import "./App.css";
import Experiences from "./Components/Experiences/Experiences";
import Header from "./Components/Header/Header";
import Pictures from "./Components/Pictures/Pictures";
import Cards from "./Components/Cards/Cards";
import cardData from "../src/data";

function App() {
  const cards = cardData.map((card) => {
    return (
      <Cards
        id={card.id}
        status={card.stats}
        img={card.img}
        rating={card.rating}
        reviewCount={card.reviewCount}
        // country={card.country}
        title={card.title}
        price={card.price}
        location={card.location}
        openSlots={card.openSlots}
      />
    );
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
