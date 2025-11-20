Backend (Node + Express + MongoDB)
- Install: npm install
- Copy .env.example -> .env and set MONGO_URI
- Run: npm run start
- API endpoints:
  GET /api/sectors  -> list of wheel sectors (labels)
  POST /api/spin   -> perform a server-side spin, returns {prize, value}
  GET /api/spins    -> recent spin records
