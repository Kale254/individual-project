import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { Auth } from "./pages/auth/index";
import { ETracker} from "./pages/etracker/index";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={< Auth />}/>
          <Route path="/e-tracker" element={<ETracker/>} />
        </Routes>
      </Router>
      </div>
  );
}

export default App;
