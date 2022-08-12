import image from "../src/assets/katie-zaferes.png";
import image1 from "../src/assets/wedding-photography.png";
import image2 from "../src/assets/mountain-bike.png";

const cardData = [
  {
    id: 1,
    img: image,
    rating: "5.0",
    reviewCount: 6,
    // country: "USA",
    title: "Life lessons with Katie Zaferes",
    price: 136,
    location: "Online",
    openSlots: 0,
  },
  {
    id: 2,
    img: image1,
    rating: "5.0",
    reviewCount: 30,
    // country: "USA",
    title: "Learn wedding photography",
    price: 125,
    location: "Online",
    openSlots: 27,
  },
  {
    id: 3,
    img: image2,
    rating: "4.8",
    reviewCount: 2,
    // country: "USA",
    title: "Group Mountain Biking",
    price: 50,
    location: "Norway",
    openSlots: 3,
  },
];

export default cardData;
