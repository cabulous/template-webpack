import is from './is';

export const browser = {
    isIPhone: /(iPhone|iPod)/gi.test(navigator.platform),
    isIos: /(iPad|iPhone|iPod)/gi.test(navigator.platform),
    // Internet Explorer 6-11
    isIE: /* @cc_on!@ */ false || !!document.documentMode,
    // Edge 20+
    isEdge: window.navigator.userAgent.includes('Edge') ||
        (!(/* @cc_on!@ */ false || !!document.documentMode) && !!window.StyleMedia),
    // Opera 8.0+
    isOpera: (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0,
    // Firefox 1.0+
    isFirefox: typeof InstallTrigger !== 'undefined',
    // Safari 3.0+ "[object HTMLElementConstructor]"
    isSafari: /constructor/i.test(window.HTMLElement) || (function (p) {
        return p.toString() === "[object SafariRemoteNotification]";
    })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification)),
    // Chrome 1 - 79
    isChrome: !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime),
    // Edge (based on chromium) detection
    isEdgeChromium: (!!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime)) &&
        (navigator.userAgent.indexOf("Edg") != -1),
    // Blink engine detection
    isBlink: ((!!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime)) ||
        ((!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0)) &&
        !!window.CSS,
    // Webkit engine detection
    isWebkit: 'WebkitAppearance' in document.documentElement.style && !/Edge/.test(navigator.userAgent),
};

export const breakpoint = {
    phone: { max: 599 },
    tabletPortrait: { min: 600, max: 899 },
    tabletLandscape: { min: 900, max: 1199 },
    desktop: { min: 1200, max: 1799 },
    bigDesktop: { min: 1800 },
};

export const getWindowWidth = () => {
    // VisualViewport API is an experiment feature. Chrome turns it on by default.
    // https://caniuse.com/#search=visualviewport
    if (is.nullOrUndefined(window.visualViewport)) {
        return window.innerWidth;
    }

    return window.visualViewport.width;
};
