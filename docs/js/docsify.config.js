if (typeof navigator.serviceWorker !== 'undefined') {
  navigator.serviceWorker.register('js/sw.js').then(function(registration) {
    console.log('Service worker registration succeeded:');
  }).catch(function(error) {
    console.log('Service worker registration failed:', error);
  });
}

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
/*==========*/

const ID = "tw-edu-csu-90618137";
const Github = `https://github.com/${ID}`;

function footerGen(){
  var startYear = 2017;
  var currentYear = (new Date()).getFullYear();
  var yearStr = `${startYear}`;
  if (startYear != currentYear) {
    yearStr += `-${currentYear}`;
  }

  return(
    `<hr/>
  <footer>
    <span>
      <a href="${Github}">${ID}</a> &copy;${yearStr}.
    </span>
    <span>
      published with <a href="https://github.com/QingWei-Li/docsify" target="_blank">docsify</a>.
    </span>
  </footer>
  `);

}

window.$docsify = {
  name: '正修科技大學-學習筆記',
  nameLink: 'https://tw-edu-csu-90618137.github.io/csu-study-note',
  repo: 'tw-edu-csu-90618137/csu-study-note',
  el: '#main',
  loadSidebar: true,
  loadNavbar: true,
  coverpage: true,
  maxLevel: 6,
  subMaxLevel: 2,
  themeColor: '#bd8159',
  autoHeader: true,
  noEmoji: true,
  footer: footerGen,//footer plugin
  plugins: [hookState()]
}
