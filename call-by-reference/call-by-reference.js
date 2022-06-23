(() => {
  var arr = [];

  function addItem(value) {
    value.push(1);
  }

  addItem(arr);

  console.log(arr);

})();