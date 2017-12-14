module.exports = {
    APIKey: function checkApiKeySecurity(req, res, next) {
      if (req.swagger.params.name.value === 'Scott') {
        next();
      } else {
        next(new Error('access denied!'));
      }
    }
  };