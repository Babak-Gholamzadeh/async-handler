const asyncHandler = fns =>
  Object.entries(fns).reduce((acc, [key, value]) => {
    if (typeof value === 'function') {
      acc[key] = (req, res, next) =>
        Promise.resolve(value(req, res, next)).catch(next);
    } else {
      acc[key] = asyncHandler(value);
    }
    return acc;
  }, {});

module.exports = asyncHandler;
