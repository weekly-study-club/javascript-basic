(() => {

  console.log('first');

  window.setTimeout(() => {
    console.log('second');
  }, 0);

  console.log('third');

})();