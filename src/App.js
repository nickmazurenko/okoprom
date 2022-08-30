import Header from "./components/Header";
import Footer from "./components/Footer";
import ItemCatalog from "./components/ItemCatalog";
import { useState, useEffect } from "react";

function App() {
  const storage = localStorage.getItem("cart");
  const [cart, setCart] = useState([]);
  useEffect(() => {
    if (storage) {
      setCart(JSON.parse(storage));
    } else {
      localStorage.setItem("cart", JSON.stringify(storage));
    }
  }, [storage]);

  return (
    <div className="App">
      <Header cart={cart} cartItemCount={cart.length} />
      <ItemCatalog cart={cart} setCart={setCart} />
      <Footer />
    </div>
  );
}

export default App;
