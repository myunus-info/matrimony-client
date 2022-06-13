import Homepage from './components/Homepage/Homepage';
// import Register from './pages/Register/Register';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
// import Gallery from './pages/Gallery/Gallery';

function App() {
  return (
    <div>
      <header>
        <Header />
      </header>

      <main>
        <Homepage />
        {/* <Register />
        <Gallery /> */}
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
