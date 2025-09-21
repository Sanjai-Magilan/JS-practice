const logTimestamp = (req, res, next) => {
  console.log(`[${Date()}] Request to: ${req.method} ${req.url}`);
  next();
};

export default logTimestamp;