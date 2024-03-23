import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import HomePage from './components/HomePage'




function App() {



  // useEffect(() => {
  //   if (data && data[index]) {
  //       setProduct(data[index]);
  //   }
  // }, [data, index]);

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error: {error.message}</p>;
  // if (!product) return console.log("product failed to fetch");


  return (
    <>
      <Header />
      <HomePage />
      <Footer />
    </>
  )

  // return (
  //   <>
  //     <Shop.Provider value={{ cartItems, product, setProduct, addToCart }}>
  //       <Header />
  //       <HomePage />
  //       <PurchaseScreen />
  //     </Shop.Provider>
  //   </>
  // )
}

export default App
