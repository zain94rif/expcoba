const response = (statusCode, data, message, res) => {
  res.status(statusCode).json({
    message,
    data,
  });
};

module.exports = response;
