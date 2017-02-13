function HashTable() {
  this.data = {};
  this.size = 0;
}

HashTable.prototype.enumerate = function () {
  for (var element in this.data) {
    console.log(element, this.data[element]);
  }
};

HashTable.prototype.isEmpty = function () {
  return this.size > 0 ? false : true;
};

HashTable.prototype.clear = function () {
  this.data = {};
  this.size = 0;
  return this.data;
};

HashTable.prototype.contains = function (key) {
  if (this.data.hasOwnProperty(key)) {
    return true;
  } else {
    return false;
  }
};

HashTable.prototype.put = function (key, value) {
  if (this.data.hasOwnProperty(key)) {
    throw new Error("HashTable cannot contain duplicates.");
  } else {
    this.data[key] = value;
    this.size++;
    return this.data;
  }
};

HashTable.prototype.remove = function (key) {
  if (this.data.hasOwnProperty(key)) {
    delete this.data[key];
    this.size--;
    return this.data;
  }
};

HashTable.prototype.getSize = function () {
  return this.size;
};

HashTable.prototype.toString = function () {
  return String(this.data);
};


var ht = new HashTable();
console.log(ht.put('color', 'red'));
// console.log(ht.remove('color'));
console.log(ht.isEmpty());
console.log(ht.getSize());
