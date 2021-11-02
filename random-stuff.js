const objectToArray = (object, containKeys) => (Object.keys(object).map((key) => containKeys ? [key, object[key]] : object[key]));
const convertToString = (thing) => (typeof thing === 'function' ? String(thing) : JSON.stringify(thing));
