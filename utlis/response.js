module.exports =(res, status, data, message, httpCode) => {
  const userObj = { status };
  if (data) {
    userObj.data = data;
  }
  if (message) {
    userObj.message = message;
  }
  if (httpCode) {
    res.status(httpCode);
  }
  res.json(userObj)
}