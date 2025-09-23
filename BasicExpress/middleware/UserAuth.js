import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
function UserAuthentication(req, res, next) {
  const AuthenticationHeader = req.headers["authorization "];
  const Token = AuthenticationHeader && AuthenticationHeader.split(" ")[1];
  if (Token == null) return res.status(401).send("no token recived");
  jwt.verify(Token, process.env.ACCESS_TOKEN,(error ,user));
}
