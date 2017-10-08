(($docsify)=>{
  if(!$docsify){console.err("$docsify no exist.")}
  if ($docsify) {
    $docsify.plugins = [].concat(docsifyFooter(), $docsify.plugins)
  }

  function docsifyFooter() {
    return function(hook, vm) {
      hook.afterEach(function(html,next) {
        var footer = "<hr/><footer>Set your footer in docsify config (window.$docsify.footer)</footer>";
        if(typeof $docsify.footer === "function"){
          footer = $docsify.footer();
        }else if($docsify.footer){
          footer = $docsify.footer;
        }
        next (html + footer);
      })

    };
  }

})(window.$docsify);
