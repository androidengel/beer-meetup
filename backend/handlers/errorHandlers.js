// instead of using try/catch on async/await middleware,
// writing one function that wraps async/await calls
exports.catchErrors = (fn) => function (req, res, next) {
  return fn(req, res, next).catch(next);
};

// when hitting an page that is not found
// mark as 404 and pass it along to error handler to display
exports.notFound = (req, res, next) => {
  const err = new Error('Not Found');
  err.status('404');
  next(err);
};
