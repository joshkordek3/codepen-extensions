class ArrayExtension extends Array {
  insert (item, index) {
    this.splice(index, 0, item);
  }
}
Array.prototype.insert = function (item, index) {
  this.splice(index, 0, item);
  return this;
}
