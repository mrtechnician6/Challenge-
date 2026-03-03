const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, default: "Nir Kunwar" },
  startDate: { type: Date, default: Date.now },
  currentStreak: { type: Number, default: 0 },
  // Stores daily logs: { date: "2026-03-03", categories: {...}, status: "completed/missed" }
  logs: [{
    date: String,
    dayNumber: Number,
    categories: {
      cricket: { status: Boolean, missedReason: String },
      fitness: { status: Boolean, missedReason: String },
      study: { status: Boolean, missedReason: String },
      nutrition: { status: Boolean, missedReason: String },
      mindset: { status: Boolean, missedReason: String },
      sleep: { status: Boolean, missedReason: String }
    },
    isRecoveryDay: Boolean,
    reflection: String
  }]
});

module.exports = mongoose.model('User', UserSchema);
