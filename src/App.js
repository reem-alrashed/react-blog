import logo from './logo.PNG';
import './App.css';
import Footer from './components/footer'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello, world!</h1>
      </header>
        <Footer/>
    </div>
  );
}

export default App;
