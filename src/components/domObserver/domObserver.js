import is from '../../utils/is';

class DomObserver {

  /**
   * @param {Function} callback
   * @param {Document} pageDocument
   */
  static watch(callback, pageDocument = document) {
    DomObserver.#observeDomMutation(pageDocument, 'body', (mutationsList) => {
      mutationsList.forEach(mutation => {
        mutation.addedNodes.forEach(node => {callback(node);});
      });
    });
  }

  /**
   * @param {Document} pageDocument
   * @param {string|string[]} cssSelectors
   * @param {CallableFunction} callback
   */
  static #observeDomMutation(pageDocument, cssSelectors, callback) {
    if (is.empty(cssSelectors)) {
      return;
    }

    let selectorArray = cssSelectors;

    if (is.string(cssSelectors)) {
      selectorArray = [cssSelectors];
    }

    selectorArray.forEach(
      s => {DomObserver.#observeNode(pageDocument, s, callback);},
    );
  }

  /**
   * @param {Document} pageDocument
   * @param {string} selector
   * @param {Function} onSuccess
   */
  static #observeNode(pageDocument, selector, onSuccess) {
    if (is.nullOrUndefined(selector) || !is.string(selector)) {
      return;
    }

    const targetNode = pageDocument.querySelector(selector);
    if (is.nullOrUndefined(targetNode)) {
      return;
    }

    const callback = (mutationsList) => {
      if (is.function(onSuccess)) {onSuccess(mutationsList);}
    };

    const observer = new MutationObserver(callback);
    const config = {
      attributes: true,
      characterData: false,
      childList: true,
      subtree: true,
    };

    observer.observe(targetNode, config);
  }
}

export default DomObserver;
