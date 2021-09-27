var theme;
var darkImg = '<svg id="Moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 815.75 1588.42"><defs><style>.cls-4{fill:none;stroke-miterlimit:10;stroke-width:100px;}</style></defs><title>dark</title><polygon class="cls-4" points="513.92 788.99 736.24 1502.98 381.91 1361.25 57.6 788.99 381.91 227.39 736.24 85.66 513.92 788.99"/></svg>';
var lightImg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1278.64 1243.78"><defs><style>.cls-5{fill:none;stroke-miterlimit:10;stroke-width:100px;}</style></defs><title>light</title><g id="Sun"><rect class="cls-5" x="448.84" y="422.49" width="409.13" height="409.13"/></g><g id="Rays"><rect class="cls-6" x="1319.79" y="840.01" width="195.06" height="99.21" transform="translate(1543.01 -1319.79) rotate(90)"/><rect class="cls-6" x="763.92" y="1369.53" width="195.06" height="99.21" transform="translate(958.98 2046.18) rotate(180)"/><rect class="cls-6" x="1847.5" y="1367.72" width="195.06" height="99.21" transform="translate(3126.15 2042.56) rotate(180)"/><rect class="cls-6" x="1319.79" y="1888.73" width="195.06" height="99.21" transform="translate(2591.73 -271.07) rotate(90)"/><rect class="cls-6" x="879.78" y="937.54" width="228.13" height="99.21" transform="translate(234.66 1595.83) rotate(-135)"/><rect class="cls-6" x="1733.57" y="1791.19" width="227.86" height="99.21" transform="translate(1088.32 3656.74) rotate(-135)"/><rect class="cls-6" x="1735.5" y="937.54" width="224.01" height="99.21" transform="translate(-920.82 803.43) rotate(-45)"/><rect class="cls-6" x="882.22" y="1791.19" width="223.25" height="99.21" transform="translate(-1774.47 449.83) rotate(-45)"/></g></svg>';

function theme_apply() {
  'use strict';
  if (theme === 'light') {
    document.getElementById('theme-readout').innerHTML = lightImg;
    document.body.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  } else {
    document.getElementById('theme-readout').innerHTML = darkImg;
    document.body.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  }
}
theme_apply();
function theme_switch() {
  'use strict';
  if (theme === 'light') {
    theme = 'dark';
  } else {
    theme = 'light';
  }
  theme_apply();
}

function theme_set(color) {
  theme = color;
  if (color === 'dark') {
    img = darkImg;
  } else {
    img = lightImg
  }
  document.getElementById('theme-readout').innerHTML = img;
  document.body.setAttribute('data-theme', color);
}

var theme_OS = window.matchMedia('(prefers-color-scheme: light)');
theme_OS.addEventListener('change', function (e) {
  'use strict';
  if (e.matches) {
    theme = 'light';
  } else {
    theme = 'dark';
  }
  theme_apply();
});

if (localStorage.getItem('theme') != null) {

	if (localStorage.getItem('theme') === 'dark') {
    		theme_set('dark');
	} else if (localStorage.getItem('theme') === 'light') {
    		theme_set('light');
	}

} else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
	theme_set('dark');
} else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
	theme_set('light');
} else {
	theme_set('dark');
}

console.log("test")
