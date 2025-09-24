import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

function UserAuthentication(req, res, next) {
  const AuthenticationHeader = req.headers["authorization"];
  const Token = AuthenticationHeader && AuthenticationHeader.split(" ")[1];

  if (!Token) {
    req.user = { Role: "guest" };
    return next();
  }

  jwt.verify(Token, process.env.ACCESS_TOKEN, (err, user) => {
    if (err) return res.status(403).send("Invalid or expired token");
    req.user = user;
    next();
  });
}

export default UserAuthentication;
