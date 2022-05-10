import is from './is';

export function setAttributes(element, attributes) {
  if (!is.element(element) || is.empty(attributes)) {
    return;
  }

  // Assume null and undefined attributes should be left out.
  // Setting them would otherwise convert them to "null" and "undefined".
  Object.entries(attributes)
    .filter(([, value]) => !is.nullOrUndefined(value))
    .forEach(([key, value]) => element.setAttribute(key, value));
}

export function removeAttributes(element, attributes) {
  if (!is.element(element) || is.empty(attributes)) {
    return;
  }

  // Assume null and undefined attributes should be left out.
  // Setting them would otherwise convert them to "null" and "undefined".
  Object.entries(attributes)
    .filter(([, value]) => !is.nullOrUndefined(value))
    .forEach(([key]) => element.removeAttribute(key));
}

/**
 * @param {string} type
 * @param {Object} [attributes]
 * @param {string} [text]
 * @param {boolean} [isSvgType]
 * @return {HTMLElement}
 */
export function createElement(
  type, attributes = {}, text = '', isSvgType = false) {
  // Create a new <element>
  let element;

  if (isSvgType) {
    element = document.createElementNS('http://www.w3.org/2000/svg', type);
  } else {
    element = document.createElement(type);
  }

  // Set all passed attributes
  if (is.object(attributes)) {
    setAttributes(element, attributes);
  }

  // Add text node
  if (is.string(text)) {
    element.innerHTML = text;
  }

  // Return built element
  return element;
}

// Insert an element after another
export function insertAfter(element, target) {
  if (!is.element(element) || !is.element(target)) {
    return;
  }

  target.parentNode.insertBefore(element, target.nextSibling);
}

// Insert a Document Fragment
export function insertElement(type, parent, attributes, text) {
  if (!is.element(parent)) {
    return;
  }

  parent.appendChild(createElement(type, attributes, text));
}

// Remove element(s)
export function removeElement(element) {
  if (is.nodeList(element) || is.array(element)) {
    Array.from(element).forEach(removeElement);
    return;
  }

  if (!is.element(element) || !is.element(element.parentNode)) {
    return;
  }

  element.parentNode.removeChild(element);
}

// Remove all child elements
export function emptyElement(element) {
  if (!is.element(element)) {
    return;
  }

  let { length } = element.childNodes;

  while (length > 0) {
    element.removeChild(element.lastChild);
    length -= 1;
  }
}

// Replace element
export function replaceElement(newChild, oldChild) {
  if (!is.element(oldChild) || !is.element(oldChild.parentNode) ||
    !is.element(newChild)) {
    return null;
  }

  oldChild.parentNode.replaceChild(newChild, oldChild);

  return newChild;
}

// Toggle hidden
export function toggleHidden(element, hidden) {
  if (!is.element(element)) {
    return;
  }

  let hide = hidden;

  if (!is.boolean(hide)) {
    hide = !element.hidden;
  }

  // eslint-disable-next-line no-param-reassign
  element.hidden = hide;
}

// Mirror Element.classList.toggle, with IE compatibility for "force" argument
export function toggleClass(element, className, force) {
  if (is.empty(className)) {
    return false;
  }

  if (is.nodeList(element)) {
    return Array.from(element).map(e => toggleClass(e, className, force));
  }

  if (is.element(element)) {
    let method = 'toggle';
    if (typeof force !== 'undefined') {
      method = force ? 'add' : 'remove';
    }

    element.classList[method](className);
    return element.classList.contains(className);
  }

  return false;
}

/**
 * @param {HTMLElement | Node} element
 * @param {string} className
 * @return {boolean}
 */
export function hasClass(element, className) {
  return is.element(element) && element.classList.contains(className);
}

/**
 * @param {Element} targetElement
 * @param {string} selectors
 * @return {Element | null}
 */
export function getClosestElement(targetElement, selectors) {
  return targetElement.closest(selectors);
}

/**
 * @param {Element} targetElement
 * @param {string} selectors
 * @return {boolean}
 */
export function hasClosestElement(targetElement, selectors) {
  if (!is.element(targetElement)) {
    return false;
  }
  return !is.nullOrUndefined(getClosestElement(targetElement, selectors));
}

/**
 * @param {Element | Node} container
 * @param {string} selector
 * @return {boolean}
 */
export function hasChild(container, selector) {
  return !is.nullOrUndefined(container.querySelector(selector));
}

/**
 * @param {Element | Node} element
 * @param {string} selector
 * @return {boolean}
 */
export function hasDirectChild(element, selector) {
  if (is.nullOrUndefined(element) || !is.element(element)) {
    throw new Error(`expect an element but got ${typeof element}`);
  }

  const kids = element.childNodes;

  if (is.nullOrUndefined(kids) || is.empty(kids)) {
    return false;
  }

  /**
   * @type {ChildNode[]}
   */
  const res = Array.from(kids).filter((kid) => {
    if (is.element(kid)) {
      return kid.matches(selector);
    }
  });

  return !is.empty(res);
}

/**
 * @param {Element | Node} element
 * @param {string} selector
 * @return {ChildNode[]}
 */
export function getSiblings(element, selector) {
  if (is.nullOrUndefined(element) || !is.element(element)) {
    throw new Error(`expect an element but got ${typeof element}`);
  }

  const parent = element.parentNode;

  if (is.nullOrUndefined(parent)) {
    return [];
  }

  const kids = parent.childNodes;

  if (is.nullOrUndefined(kids) || is.empty(kids)) {
    return [];
  }

  return Array.from(kids).filter((kid) => {
    if (is.element(kid)) {
      return kid.matches(selector);
    }
  });
}

/**
 * @param {Element} element
 * @param {string} selector
 * @return {boolean}
 */
export function hasSibling(element, selector) {
  if (is.nullOrUndefined(element) || !is.element(element)) {
    throw new Error(`expect an element but got ${typeof element}`);
  }

  const parent = element.parentNode;

  if (is.nullOrUndefined(parent)) {
    return false;
  }

  return hasDirectChild(parent, selector);
}

/**
 * @param {Element} element
 * @return {boolean}
 */
export function hasBackgroundImage(element) {
  if (!is.element(element)) {
    throw new Error(`expect an element but got ${typeof element}`);
  }
  const computedStyle = getComputedStyle(element);
  const backgroundImage = computedStyle.backgroundImage;
  return backgroundImage !== 'none';
}

// Get element tag name
export function getElementTagName(element) {
  if (!is.element(element)) {
    return '';
  }

  return element.tagName.toLowerCase();
}

/**
 * @param {HTMLElement | Node | NodeList} element
 * @param {Object} styles
 * @return {boolean}
 */
export function setInlineStyles(element, styles) {
  if (is.nodeList(element)) {
    Array.from(element).map(e => setInlineStyles(e, styles));
  }

  if (!is.element(element)) {
    return false;
  }

  const anElement = element;
  Object.keys(styles).forEach(key => {
    anElement.style[key] = styles[key];
  });

  return true;
}

/**
 * @param {HTMLElement} element
 * @param {string} property
 * @return {boolean}
 */
export function removeAnInlineStyle(element, property) {
  if (!is.element(element)) {
    return false;
  }

  element.style.removeProperty(property);

  return true;
}

/**
 * @param {string} styleString
 */
export function addStyleString(styleString) {
  const style = document.createElement('style');
  style.textContent = styleString;
  document.head.append(style);
}

/**
 * @param {string} selector
 * @param {CSSStyleDeclaration} style
 */
export function getStyleString(selector, style) {
  const styleString = Object.entries(style)
    .map(([k, v]) => `${k}: ${v}`)
    .join(';');
  return `${selector} { ${styleString} }`;
}

/**
 * @param {HTMLButtonElement} element
 * @return {boolean}
 */
export function isDisabled(element) {
  if (!is.element(element)) {
    return false;
  }

  if (is.nullOrUndefined(element.disabled)) {
    return false;
  }

  return element.disabled;
}

/**
 * @param {HTMLButtonElement} element
 * @return {boolean}
 */
export function disable(element) {
  if (!is.element(element)) {
    return false;
  }

  // eslint-disable-next-line no-param-reassign
  element.disabled = true;

  return true;
}

/**
 * @param {string} selector
 * @param {function} onSuccess
 */
export function observeNode(selector, onSuccess) {
  if (is.nullOrUndefined(selector) || !is.string(selector)) {
    return;
  }

  const targetNode = document.querySelector(selector);
  const config = { childList: true };
  const isFunction = is.function(onSuccess);

  if (is.nullOrUndefined(targetNode)) {
    return;
  }

  const callback = (mutationsList) => {
    for (let i = 0; i < mutationsList.length; i += 1) {
      if (mutationsList[i].type === 'childList') {
        if (isFunction) {
          onSuccess();
        }
      }
    }
  };

  // Create an observer instance linked to the callback function
  const observer = new MutationObserver(callback);

  // Start observing the target node for configured mutations
  observer.observe(targetNode, config);
}
