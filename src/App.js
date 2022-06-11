// import Homepage from './components/Homepage/Homepage';
import Register from './pages/Register/Register';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <header>
        <Header />
      </header>
      {/* <Homepage /> */}
      <Register />

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
