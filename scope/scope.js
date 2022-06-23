(() => {
  var globalVariable = '여기는 글로벌이예요';

  function exampleFunction() {
    window.alert(globalVariable);
    var localVariable = '지역 변수예요.';
  }

  exampleFunction();

  console.log(localVariable);
})();