function fitTextToContainer(selector, defaultScale = 1) {
    document.querySelectorAll(selector).forEach(function(el) {
        el.style.transform = 'scaleX(' + defaultScale + ')';
        const parent = el.parentElement;
        const parentWidth = parent.offsetWidth;
        const elWidth = el.scrollWidth;
        if (elWidth > parentWidth) {
            el.style.transformOrigin = "left top";
            const scale = parentWidth / elWidth;
            el.style.transform = "scaleX(" + scale + ")";
        }
    });
}

function fitAllHeaders() {
    fitTextToContainer('.headerContent .filled-text', 1);
    fitTextToContainer('.headerContent .outlined-text', 1.035);
}

window.addEventListener('DOMContentLoaded', fitAllHeaders);
window.addEventListener('resize', fitAllHeaders);