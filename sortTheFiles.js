function sortTheFiles(N, list) {
  for (var i = 1; i <= N; i++) {
    var item = 'IMG';
    item += i.toString();
    item += '.jpg';
    list[i] = item;
  }

  list = list.sort();
  console.log(list);
  return list;
}

var N = 16;
var list = [];
sortTheFiles(N, list);
