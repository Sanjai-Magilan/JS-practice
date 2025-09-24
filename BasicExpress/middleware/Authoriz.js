function authorizeRoles(...allowedRoles) {
  return (req, res, next) => {
    if (!req.user) return res.status(401).send("Not authenticated");

    if (!allowedRoles.includes(req.user.UserRoll)) {
      return res.status(403).send("Access denied");
    }
    next();
  };
}

export default authorizeRoles;