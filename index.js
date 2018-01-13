function getFirstSelector(selector) {
  return document.querySelector(selector);
};

function nestedTarget() {
  return document.getElementById('nested').querySelector('div');
};

function deepestChild() {
  return document.getElementById('grand-node').querySelector('div div div div div');
};

function increaseRankBy(n) {
  var parsed = parseInt(n);
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  for (var i = 0; i < lis.length; i++) {
    return lis[i].innerHTML = i + parsed;
  }
};
