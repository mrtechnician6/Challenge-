import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Dashboard = () => {
  const navigate = useNavigate();
  // Mock State: In production, fetch this from MongoDB
  const [day] = useState(19); 
  const progress = (day / 60) * 100;

  const categories = [
    { id: 'cricket', name: 'Cricket Practice', icon: '🏏' },
    { id: 'fitness', name: 'Fitness', icon: '🏋️' },
    { id: 'study', name: 'Study', icon: '📚' },
    { id: 'nutrition', name: 'Nutrition', icon: '🥗' },
    { id: 'mindset', name: 'Mindset', icon: '🧘' },
    { id: 'sleep', name: 'Sleep', icon: '😴' },
  ];

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Header Section */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }}
        className="mb-8 text-center"
      >
        <h1 className="text-4xl font-black text-orange-500 italic">NIR 60 PROTOCOL</h1>
        <p className="text-slate-400">Day {day} of 60 • {new Date().toLocaleDateString()}</p>
      </motion.header>

      {/* Progress Bar */}
      <div className="bg-slate-800 h-4 rounded-full mb-8 overflow-hidden border border-slate-700">
        <motion.div 
          className="bg-gradient-to-r from-orange-600 to-yellow-400 h-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 1 }}
        />
      </div>

      {/* Motivational Quote */}
      <blockquote className="border-l-4 border-orange-500 pl-4 py-2 mb-8 bg-slate-900 italic text-slate-300">
        "Champions aren't made in the gyms. Champions are made from something they have deep inside them."
      </blockquote>

      {/* Category Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {categories.map((cat) => (
          <motion.div
            key={cat.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate(`/category/${cat.id}`)}
            className="bg-slate-900 p-6 rounded-2xl border border-slate-800 hover:border-orange-500 cursor-pointer text-center transition-all"
          >
            <span className="text-4xl mb-3 block">{cat.icon}</span>
            <h3 className="font-bold uppercase tracking-wider">{cat.name}</h3>
          </motion.div>
        ))}
      </div>
      
      {/* Navigation Footer */}
      <nav className="fixed bottom-0 left-0 right-0 bg-slate-900 p-4 flex justify-around border-t border-slate-800">
        <button onClick={() => navigate('/dashboard')} className="text-orange-500">Dashboard</button>
        <button onClick={() => navigate('/history')}>History</button>
        <button onClick={() => navigate('/analytics')}>Analytics</button>
      </nav>
    </div>
  );
};

export default Dashboard;
