import Header from "./Components/Header";
import "../src/style.css";
import Cards from "./Components/Cards";
import Footer from "./Components/Footer";
import { useState } from "react";

function App() {
  const [addToCart, setAddToCart] = useState(0);

  const handleSubmit = () => {
    setAddToCart(addToCart + 1);
  };

  const handleRemove = () => {
    setAddToCart(addToCart - 1);
  };

  return (
    <div>
      <Header addToCart={addToCart} />
      <Cards handleSubmit={handleSubmit} handleRemove={handleRemove} />
      <Footer />
    </div>
  );
}

export default App;
