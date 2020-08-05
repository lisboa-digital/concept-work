import {breakpoints} from '../../breakpoints';

function siteHeader__lang () {
    var langs = document.querySelectorAll('.site-header__lang');

    function handleResize(e) {
        var dataSrc = window.matchMedia('(min-width: ' + breakpoints.lg + ')').matches ? 'name' : 'tag';
        langs.forEach(function(lang) {
            lang.innerHTML = lang.getAttribute('data-lang-' + dataSrc)
        });
    }

    window.addEventListener('resize', handleResize);
    
    handleResize(null);
}

siteHeader__lang();