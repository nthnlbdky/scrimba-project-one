
import {Main} from './components/Main';
import Navbar  from './components/Navbar';
import Footer  from './components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
      </header>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
