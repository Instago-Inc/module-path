(function(){
  function joinURL(a,b){
    a = (a||'').replace(/^\/+|\/+$/g,'');
    b = (b||'').replace(/^\/+|\/+$/g,'');
    return a && b ? (a + '/' + b) : (a || b);
  }
  module.exports = { joinURL };
})();

