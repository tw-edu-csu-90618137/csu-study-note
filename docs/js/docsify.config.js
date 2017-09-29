if (typeof navigator.serviceWorker !== 'undefined') {
  navigator.serviceWorker.register('js/sw.js').then(function(registration) {
    console.log('Service worker registration succeeded:');
  }).catch(function(error) {
    console.log('Service worker registration failed:', error);
  });
}

const ID = "tw-edu-csu-90618137";
const Github = `https://github.com/${ID}`;

/*===docsify plugins===*/
function hookState() {
  return function(hook, vm) {
    hook.init(function() {
      console.log("hook.init");
    })

    hook.beforeEach(function(content) {
      console.log("hook.beforeEach");
      return content;
    })

    hook.afterEach(function(html, next) {
      console.log("hook.afterEach");
      next(html)
    })

    hook.doneEach(function() {
      console.log("hook.doneEach");
    })

    hook.mounted(function() {
      console.log("hook.mounted");
    })

    hook.ready(function() {
      console.log("hook.ready");
    })
  }
}

function pageFooter() {
  return function(hook, vm) {
    var startYear = 2017;
    var currentYear = (new Date()).getFullYear();
    var yearStr = `${startYear}`;
    if (startYear != currentYear) {
      yearStr += `-${currentYear}`;
    }
    var footer =
      `<hr/>
    <footer>
      <span>
        <a href="${Github}">${ID}</a> &copy;${yearStr}.
      </span>
      <span>
        published with <a href="https://github.com/QingWei-Li/docsify" target="_blank">docsify</a>.
      </span>
    </footer>
    `;

    hook.afterEach(function(html) {
      return html + footer;
    })
  };
}

function katexParser() {
  return function(hook, vm) {
    var stack = [];
    hook.beforeEach(function(content) {

      return content.replace(/\$\$([\s\S]*?)\$\$/g, function(m, code) {
        try {
          if (/^\n/g.test(code)) {
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
/*==========*/

window.$docsify = {
  name: '正修科技大學-學習筆記',
  nameLink: '/',
  repo: 'tw-edu-csu-90618137/csu-study-note',
  el: '#main',
  loadSidebar: true,
  loadNavbar: true,
  coverpage: true,
  maxLevel: 6,
  subMaxLevel: 6,
  themeColor: '#bd8159',
  autoHeader: true,
  noEmoji: true,
  plugins: [hookState(),pageFooter(), katexParser()]
}
