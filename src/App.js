import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import First from './Components/First';
import Second from './Components/Second';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2 className="my-4">Hook useState</h2>
        <div className="container">
          <div className="row">
            <div className="col">
              <First />
            </div>
            <div className="col">
              <Second />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
