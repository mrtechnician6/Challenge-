import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Welcome from './components/Welcome';
import CategoryPage from './components/CategoryPage';
import History from './components/History';

// Main Entry Point
function App() {
  return (
    <div className="bg-slate-950 min-h-screen text-white font-sans">
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/category/:id" element={<CategoryPage />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
  
