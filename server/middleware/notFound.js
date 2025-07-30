const notFound = (req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
};
// Catch-all route for 404 errors. (Ex: /characters/unknown)

export default notFound;
