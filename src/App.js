import { useEffect, useState } from "react";
import "./App.css";
import Pagination from "./Pagination";

function App() {
  const [products, setProducts] = useState();
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products");
        const data = await res.json();
        setProducts(data);
      } catch (e) {
        console.log(e);
      }
    };

    getProducts();
  }, []);

  return (
    <div className="App">
      <Pagination data={products} />
    </div>
  );
}

export default App;
