import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css'
import Auth from "./pages/Auth";
import Dashboard from './pages/Dashboard'
import Header from "./components/Header/Header";
import LeftNavBar from "./components/Drawer/LeftNavBar";
import './App.css'
import AddExpense from "./pages/AddExpense";
import THistory from "./components/TranHistory/THistory";
import { useEffect, useRef } from "react";
function App() {
  
  return (
    <>
      <Router>
        <div className="min-h-screen flex flex-col ">
          <Header />
          <main className=" w-full py-[20px] text-gray-600 flex justify-between gap-7 flex-grow bg-red-200">
          <LeftNavBar/>
            <Routes>
              <Route path="/" element={<Auth />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/addExpense" element={<AddExpense/>} />
            </Routes>
            <THistory/>
          </main>
        </div>
      </Router>
    </>
  );
}

export default App;