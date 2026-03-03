const isRecoveryDay = day % 7 === 0;

// In UI rendering:
{isRecoveryDay && (
  <div className="bg-green-900/30 border border-green-500 p-4 rounded-xl mb-4 text-center">
    <h2 className="text-xl font-bold text-green-400">RECOVERY MODE ACTIVE</h2>
    <p>Cheat meal allowed. Focus on active recovery and reflection.</p>
  </div>
)}
