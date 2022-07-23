const ErrorMessage = {
  0: "success",
  7: "Permission denied",
  9: "Invalid parameters"
};
console.log('ErrorMessage', ErrorMessage)

console.log(typeof ErrorMessage)
type ErrorCode = keyof typeof ErrorMessage