import {breakpoints} from '../../breakpoints';

function siteHeader__nav () {
    var toggleBtn = document.querySelector('.site-header__toggle-nav-btn');
    var nav = document.querySelector('.site-header__nav');
    
    function toggleNav (e) {
        nav.classList.toggle("site-header__nav--open");
    }

    function handleResize(e) {
        if (window.matchMedia('(min-width: ' + breakpoints.lg + ')').matches) {
            nav.classList.remove("site-header__nav--open");
        }
    }

    toggleBtn.addEventListener('click', toggleNav);
    window.addEventListener('resize', handleResize);

    handleResize(null);
}

siteHeader__nav();