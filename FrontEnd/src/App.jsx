import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css'
import Auth from "./pages/Auth";
import Dashboard from './pages/Dashboard'
import Header from "./components/Header/Header";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
