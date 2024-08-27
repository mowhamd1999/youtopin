import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header'
import SliderSwiper from './components/sliderSwiper/SliderSwiper';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="pages">
        <SliderSwiper />
        
      </div>
      <Footer />
    </div>
  );
}

export default App;
