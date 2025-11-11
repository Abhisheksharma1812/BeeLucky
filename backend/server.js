const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const path = require('path');

const app = express();

require('dotenv').config();

// Middleware
app.use(
  cors({
    origin: [
      "https://bee-lucky.vercel.app", // your frontend
      "http://localhost:5173",        // for local dev
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
/* app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
})); */
app.use(express.json());
app.use("/uploads", express.static("uploads")); // serve images

const MONGO = process.env.MONGO_URI || 'mongodb://localhost:27017/Beelucky';
mongoose.connect(MONGO, {useNewUrlParser:true, useUnifiedTopology:true})
  .then(()=> console.log('MongoDB connected'))
  .catch(err => console.error('Mongo error', err));

  
// Mount API routes BEFORE static/catch-all so API requests aren't intercepted
const PORT = 4000;
app.use('/api', authRoutes);

// Serve the static files from the React app
//app.use(express.static(path.join(__dirname, '../frontend')));
app.use(express.static(path.join(__dirname, '../frontend/dist')));

// Handle requests by serving index.html for all non-API routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend', 'index.html'));
});

app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`));
