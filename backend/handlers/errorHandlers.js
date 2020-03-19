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

exports.developmentErrors = (err, req, res, next) => {
  err.stack = err.stack || '';
  const errorDetails = {
    message: err.message,
    status: err.status,
    stack: err.stack,
  };
  res.status(err.status || 500);
  res.format({
    'application/json': () => res.json(errorDetails), // cb required to prevent rewrite of headers after they're sent
  });
};

exports.productionErrors = (err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    message: err.message,
    error: {},
  });
};
