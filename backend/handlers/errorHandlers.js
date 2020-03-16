// instead of using try/catch on async/await middleware,
// writing one function that wraps async/await calls
exports.catchErrors = (fn) => function (req, res, next) {
  return fn(req, res, next).catch(next);
};
