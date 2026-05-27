const wrapAsync = ((fn)=> {
  return function(req, res, next) {
    // Executes the async function and catches any errors
    fn(req, res, next).catch(next);
  };
})

module.exports = wrapAsync;