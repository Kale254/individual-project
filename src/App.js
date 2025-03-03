import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { Auth } from "./pages/auth/index";
import { Kitchen} from "./pages/kitchen/index";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={< Auth />}/>
          <Route path="/kitchen" element={<Kitchen/>} />
        </Routes>
      </Router>
      </div>
  );
}

export default App;
