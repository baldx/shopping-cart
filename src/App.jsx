import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import HomePage from './components/HomePage'
import PurchaseScreen from './components/PurchaseScreen';
import Cart from './components/Cart';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [hide, setHide] = useState(false)

  const addToCart = (product, amount) => {
    console.log("rsra");
    setCartItems([...cartItems, { product, amount }]);
  }

  const Show = () => {
    setHide(true);
  }

  return (
    <>
      <Header onClick={Show}/>

      <HomePage/>
      {hide && <PurchaseScreen addToCart={addToCart}/>}
      {hide && <Cart cartItems={cartItems} />}
    </>
  )
}

export default App
