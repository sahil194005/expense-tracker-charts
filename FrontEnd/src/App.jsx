import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css'
import Auth from "./pages/Auth";
import Dashboard from './pages/Dashboard'
import Header from "./components/Header/Header";
import LeftNavBar from "./components/Drawer/LeftNavBar";
import './App.css'
import Bills from "./pages/Bills";
import THistory from "./components/TranHistory/THistory";
function App() {
  return (
    <>
    
      <Router>
        <Header />
        <main className=" w-full  min-h-[calc(100vh-70px)] py-[20px] text-gray-600 flex justify-between gap-7 ">
        <LeftNavBar/>
          <Routes>
            <Route path="/" element={<Auth />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/bills" element={<Bills/>} />
          </Routes>
          <THistory/>
        </main>
      </Router>
    </>
  );
}

export default App;
