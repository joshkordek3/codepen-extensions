export const objectToArray = (object, containKeys) => (Object.keys(object).map((key) => containKeys ? [key, object[key]] : object[key]));
export const convertToString = (thing) => (typeof thing === 'function' ? String(thing) : JSON.stringify(thing));
export const checkType = (val) => {
  const valType = typeof val;
  if (valType != "string") throwErrors("expected type of val to be a string but instead got a" + checkType(valType));
  const vowels = ["a", "e", "i", "o", "u"];
  return (vowels.indexOf(val[0]) == -1 ? " " : "n ") + val;
};
export const throwErrors = (errors) => {
  const errorsType = typeof errors;
  const stringified = JSON.stringify(errors);
  if (!(Array.isArray(errors) || errorsType == "string")) throw new Error("expected type of errors to be a string or an array but instead got a" + checkType(errorsType));
  console.log(stringified);
  if (errorsType == "string") throw new Error(errors);
  const ers = errors;
  errors = "";
  for (let error of ers) {
    errors = errors + error + ", ";
  }
  errors = errors.substring(0, errors.length - 2);
  throw new Error(errors);
};
