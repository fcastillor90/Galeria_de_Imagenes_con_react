import './App.css';
import Card from './components/Card';
import  Header  from './components/Header';
import {imagen1,imagen2,imagen3} from './assets/img';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header title="Esto es una galeria" />
      <Card url={imagen1} title="imagen 1" description="Otoño"/>
      <Card url={imagen2} title="imagen 2" description="Puerta Roja"/>
      <Card url={imagen3} title="imagen 3" description="Las Jooooordan"/>
      <Footer text="Es una galeria de imagenes Random" />
    </div>
  );
};

export default App;
