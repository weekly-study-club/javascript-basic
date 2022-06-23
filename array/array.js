(() => {
  var arr = [1, 2, 3, 4, 5, 6];

  arr.push(7);

  var seven = arr.pop();
  var one = arr.shift();

  arr.push('Hello world!');

  var hello = arr.pop();

  window.document.body.innerHTML = `[${seven}, ${one}, ${hello}]`;
})();