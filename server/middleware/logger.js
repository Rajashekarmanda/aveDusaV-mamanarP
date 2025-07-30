import colors from "colors";

// middleware to log request details
const logger = (req, res, next) => {
  const methodColors = {
    GET: "green",
    POST: "blue",
    PUT: "yellow",
    DELETE: "red",
  };

  const color = methodColors[req.method] || "white";

  console.log(`${req.method} request for -----> '${req.url}'`[color]);
  next();
};
export default logger;
