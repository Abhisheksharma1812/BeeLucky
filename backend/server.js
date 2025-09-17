const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const app = express();
app.use(cors());
app.use(express.json());
const authRoutes = require('./routes/auth');
const path = require('path');

const MONGO = process.env.MONGO_URI || 'mongodb://localhost:27017/spin-game';
mongoose.connect(MONGO, {useNewUrlParser:true, useUnifiedTopology:true})
  .then(()=> console.log('MongoDB connected'))
  .catch(err => console.error('Mongo error', err));

const SpinSchema = new mongoose.Schema({
  prize: String,
  value: Number,
  createdAt: {type: Date, default: Date.now}
});
const Spin = mongoose.model('Spin', SpinSchema);

// prizes config - server decides probabilities
const SECTORS = [
  {label: '10 Coins', value: 10, weight: 30},
  {label: '50 Coins', value: 50, weight: 20},
  {label: '100 Coins', value: 100, weight: 10},
  {label: 'Try Again', value: 0, weight: 25},
  {label: 'Jackpot 500', value: 500, weight: 5},
  {label: '20 Coins', value: 20, weight: 10}
];

function weightedRandom(sectors){
  const total = sectors.reduce((s, x) => s + x.weight, 0);
  let r = Math.random() * total;
  for (const s of sectors){
    if (r < s.weight) return s;
    r -= s.weight;
  }
  return sectors[0];
}



// Serve the static files from the React app
app.use(express.static(path.join(__dirname, '../frontend')));

// Handle requests by serving index.html for all routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend', 'index.html'));
});


app.get('/api/sectors', (req, res) => {
  // send sectors without weights
  res.json(SECTORS.map(s => ({label: s.label, value: s.value})));
});

app.post('/api/spin', async (req, res) => {
  // server picks a sector according to configured weights
  const picked = weightedRandom(SECTORS);
  const spin = new Spin({prize: picked.label, value: picked.value});
  await spin.save();
  res.json({prize: picked.label, value: picked.value});
});

app.get('/api/spins', async (req, res) => {
  const items = await Spin.find().sort({createdAt:-1}).limit(50);
  res.json(items);
});

const PORT = process.env.PORT || 4000;
app.use('/api/auth', authRoutes);
app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`));
