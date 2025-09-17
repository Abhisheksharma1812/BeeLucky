module.exports = (req, res) => {
  if (req.url === "/api/hello") {
    return res.status(200).json({ message: "Hello from Vercel Backend!" });
  }

  return res.status(404).json({ error: "Not Found" });
};