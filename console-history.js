import "https://joshkordek3.github.io/codepen-extensions/console.history-lesander.min.js"; // https://github.com/lesander/console.history/blob/master/console-history.min.js
import "https://joshkordek3.github.io/codepen-extensions/random-stuff.js";
console.stdClear = console.clear.bind(console);
console.clear = () => {
  console.history = [];
  console.stdClear();
};
console.standardize = (log) => {
  if (isUndefined(log)) return;
  return log.length === 1 ? String(log) : log;
};
console.getHistory = () => {
  const array = [];
  for (let thing of console.history) {
    array.push(arrObj(thing.arguments));
  }
  return array;
};
console.read = (place) => {
  const history = console.getHistory();
  let thing = null;
  if (isUndefined(thing) || place === "last") thing = history[history.length - 1];
  if (place === "first") thing = history[0];
  if (thing) return console.standardize(thing);
  const placeType = typeof place;
  if (placeType !== 'number') throw new Error("expected type of place to be a number or string but instead got a" + checkType(placeType));
  if (isUndefined(thing)) thing = history[place];
  if (isUndefined(thing)) return;
  return console.standardize(thing);
};
console.remove = (logToRemove, isIndex) => {
  if (isUndefined(logToRemove)) return "";
  const history = console.getHistory();
  if (isIndex && typeof logToRemove === "number") {
    history.splice(logToRemove);
  } else {
    const stringifiedHistory = history;
    for (let i in stringifiedHistory) {
      stringifiedHistory[i] = convertToString(console.standardize(stringifiedHistory[i]));
    } 
    history.splice(stringifiedHistory.indexOf(convertToString(logToRemove)));
  }
  console.clear();
  for (let log of history) {
    console.log(...log);
  }
};
// export console;
