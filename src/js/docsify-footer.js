(($docsify)=>{
  if(!$docsify){console.error("$docsify no exist.")}
  if ($docsify) {
    $docsify.plugins = [].concat(docsifyFooter(), $docsify.plugins)
  }

  function docsifyFooter() {
    return function(hook, vm) {
      hook.mounted(function() {
        var section = document.querySelector("section.content");
        var footer = "<hr/><footer>Set your footer in docsify config (window.$docsify.footer)</footer>";
        if(typeof $docsify.footer === "function"){
          footer = $docsify.footer();
        }else if($docsify.footer){
          footer = $docsify.footer;
        }
        var article = document.createElement("article");
        article.setAttribute("footer","");
        article.className = "markdown-section";
        article.innerHTML = footer;
        section.appendChild(article);
      })

    };
  }

})(window.$docsify);
