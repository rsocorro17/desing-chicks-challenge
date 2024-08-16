import './App.css'
import Footer from './components/Footer'
import MainContent from './components/MainContent'
import Header from './components/Header'
import { CartProvider } from './context/CartProvider'

function App() {

  return (
    <CartProvider>
      <div className="App">
        <Header />
        <MainContent />
        <Footer />
      </div>
    </CartProvider>
  )
}

export default App
