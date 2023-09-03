import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css'
import {AddExpense,Auth,Blog,Dashboard,Expenses,Help,History,Setting} from './pages/index'
import Header from "./components/Header/Header";
import LeftNavBar from "./components/Drawer/LeftNavBar";
import './App.css'

import THistory from "./components/TranHistory/THistory";
import { useEffect, useRef } from "react";
function App() {
  
  return (
    <>
      <Router>
        <div className="min-h-screen flex flex-col ">
          <Header />
          <main className=" pl-[20px] md:pl-0 w-full py-[20px] mt-[72px] pr-[20px] text-gray-600 flex  gap-7 flex-grow  bg-[#F1F6F9]">
          <LeftNavBar/>
            <Routes>
              <Route path="/" element={<Auth />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/add-expense" element={<AddExpense/>} />
              <Route path="/blog" element={<Blog/>} />
              <Route path="/help" element={<Help/>} />
              <Route path="/transaction-history" element={<History/>} />
              <Route path="/settings" element={<Setting/>} />
            </Routes>
            
          </main>
        </div>
      </Router>
    </>
  );
}

export default App;