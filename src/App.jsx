import './App.css'
import Header from './components/Header'
import HomePage from './components/HomePage'

function App() {
  return (
    <>
      <Header />
      <main className="homepage-main">
        <HomePage/>
      </main>
    </>
  )
}

export default App
