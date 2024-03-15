import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import HomePage from './components/HomePage'
import PurchaseScreen from './components/PurchaseScreen';
import Cart from './components/Cart'
import { useParams } from 'react-router-dom';
import useImageURL from './components/Fetching';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [hide, setHide] = useState(false)
  const { data, loading, error } = useImageURL();
  const { index } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (data && data[index]) {
        setProduct(data[index]);
    }
  }, [data, index]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    if (!product) return null;

  const addToCart = (product) => {
    console.log("Adding to cart:", product);
   return product;
  }

  const Debug = () => {
    console.log(product);
  }

  const Show = () => {
    setHide(true);
  }

  const returnProduct = () => {
    console.log(product);
    return product;
  }

  return (
    <>
      <Header onClick={Show}/>

      <HomePage/>
      {hide && <PurchaseScreen addToCart={addToCart} product={product}/>}
      {hide && <Cart cartItems={cartItems} />}
    </>
  )
}

export default App
