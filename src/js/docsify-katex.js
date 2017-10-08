(($docsify,katex) => {
  if(!$docsify){console.err("$docsify no exist.")}
  if(!katex){console.err("$katex no exist.")}
  if ($docsify && katex) {
    $docsify.plugins = [].concat(docsifyKatex(), $docsify.plugins)
  }

  function docsifyKatex() {
    return function(hook, vm) {

      var stack = [];

      hook.beforeEach(function(content) {
        return content.replace(/\$\$([\s\S]*?)\$\$/g, function(m, code) {
          try {
            if (/^\r\n/g.test(code)) {
              stack.push(`<p>${katex.renderToString(code.trim())}</p>`);
            } else {
              stack.push(katex.renderToString(code.trim()));
            }
            return `<katex>${code}</katex>`;
          } catch (error) {
            return `<span style=\"color: red; font-weight: 500;\">${error.toString()}</span>`
          }
        });
      })

      hook.afterEach(function(html, next) {
        let parsed = html.replace(/<katex>([\s\S]*?)<\/katex>/g, function(m, code) {
          return stack.shift();
        });
        next(parsed);
      })

    };
  }

})(window.$docsify,window.katex);
