const error = (object) => {
  let message = "Undefined Error";
  if (object && object.message) {
    message = object.message;
  }
  return message;
};

export default error;
