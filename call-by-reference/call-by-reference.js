(() => {
  var arr = [];

  function addItem(value) {
    value.push(1);
  }

  addItem(arr);

  var obj = {};

  function addObjItem(value) {
    value.a = 1;
  }

  addObjItem(obj);

  console.log(obj);
})();