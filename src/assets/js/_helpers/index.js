export const x = (selector, context = document) => context.querySelectorAll(selector);

export const x0 = (selector, context = document) => context.querySelector(selector);

export const isTouch = (() =>  (('ontouchstart' in window) || (navigator.MaxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0)))();

export const getOffsetTop = elem => {
    var offsetTop = 0
    do {
        if (!isNaN(elem.offsetTop)) {
            offsetTop += elem.offsetTop
        }
    } while (elem = elem.offsetParent)
    return offsetTop
}

export const getScrollTop = () => {
    if (typeof pageYOffset!= 'undefined'){
        return pageYOffset;
    } else {
        var doc = document,
            B   = doc.body,
            D   = doc.documentElement

        D = (D.clientHeight) ? D : B
        return D.scrollTop
    }
}

export const encodeURLComponent = str => {
    return encodeURIComponent(str).replace(/[!'()*]/g, escape)
}

export const getParametersFromURL = () => {
    var re = /(?:\?|&(?:amp;)?)([^=&#]+)(?:=?([^&#]*))/g,
        match, params = {},
        url = document.location.href,
        decode = s => decodeURIComponent(s.replace(/\+/g, " "))

    while (match = re.exec(url)) {
        if(!params[decode(match[1])]) {
            params[decode(match[1])] = []
        }
        params[decode(match[1])].push(decode(match[2]))
    }

    return params
}

export const closest = (el, parentClass) => {
    do {
        if ( el.classList && el.classList.contains(parentClass)) {
            return el
        }
    } while (el = el.parentNode)

    return null
}

export const minmax = (value, min, max) => {
    if (parseInt(value) < min || isNaN(parseInt(value)))
        return min
    else if (parseInt(value) > max)
        return max
    else
        return value
}

export const setScrollTop = (offset=0) => {
    document.documentElement.scrollTop = document.body.scrollTop = offset;
}

export const getSiblings = elem => {
    const siblings = [];
    let sibling = elem.parentNode.firstChild;
    while (sibling) {
        if (sibling.nodeType === 1) {
            siblings.push(sibling);
        }
        sibling = sibling.nextSibling
    }
    return siblings;
}

export const capitalize = string => {
    return string.charAt(0).toUpperCase() + string.toLowerCase().slice(1);
}

export const isDesktop = () => window.innerWidth >= 1024;
export const isMobile = () => window.innerWidth <= 768;
export const isIOS = (() => /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream)();
export const isIE11 = !!(navigator.userAgent.match(/Trident/) && navigator.userAgent.match(/rv[ :]11/));

