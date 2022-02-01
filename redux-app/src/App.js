// import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.min.css';
import { Navbar } from './components/Navbar';
import Home from './components/Home';
import FluxHome from './components/FluxHome';

function App() {
  return (<>
    <Navbar></Navbar>
    <section class="hero is-primary">
      <div class="hero-body">
        <p class="title has-text-centered">
        Implementation With Redux
        </p>
      </div>
    </section>
    <Home></Home>

    <section class="hero is-primary my-5">
      <div class="hero-body">
        <p class="title has-text-centered">
        Implementation With Flux
        </p>
      </div>
    </section>
    <FluxHome></FluxHome>
  </>
  );
}

export default App;
