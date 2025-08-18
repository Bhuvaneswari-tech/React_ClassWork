import './App.css';
import First from './components/First';
import Header from './components/Header';
import { Footer } from './components/Footer';
import Event from './components/Event';
import Second from './components/Second';
import Third from './components/Third';
import Fourth from './components/Fourth';
import Fifth from './components/Fifth';
import Sixth from './components/Sixth';
import Employee from './components/Employee';
import Product from './components/Product';

function App() {
  return (
    <div>
      {/* <h1>Welcome to React First APP</h1>
      <p>Working with React is a fun.</p>
      <h3>Testing </h3>
      <h6>Heading 6</h6> */}

      <Header />
      {/* <First />
      <Event />
      <Second />
      <Third /> 
      <Fourth />
      <Fifth />*/}
      <Sixth />
      <Footer />
      <Employee />
      <Product />
    </div>
  );
}

export default App;
