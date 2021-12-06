import Dashboard from './components/Dashboard';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/d" element={<Dashboard />} />
          <Route path="/2" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

function NotFound() {
  return (
    <div>
      NOT A ROUTE YOU DUMB DUMB2
    </div>
  )
}

export default App;
