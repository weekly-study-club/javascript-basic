(() => {
  var a = 1;

  function changeValue(num) {
    num = 2;
    console.log(num);
  }

  changeValue(a);

  window.document.body.innerHTML = a;
})();