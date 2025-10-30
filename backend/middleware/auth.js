const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET || "secret123";

module.exports = async  function (req, res, next) {
  const token =  req.header("Authorization");
  if (!token) return res.status(401).json({ msg: "No token, authorization denied" });
    

  try {
    const decoded = jwt.verify(token.replace("Bearer ", ""), JWT_SECRET);
    //console.log( "decoded token:", decoded);
    req.user = decoded;
     // req.user = await User.findById(decoded.id).select("-password");


    next();
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};