import is from './is';

/**
 * Parse a string to a URL object
 * @param {string} input - the URL to be parsed
 * @param {Boolean} safe - failsafe parsing
 */
export function parseUrl(input, safe = true) {
  let url = input;

  if (safe) {
    const parser = document.createElement('a');
    parser.href = url;
    url = parser.href;
  }

  try {
    return new URL(url);
  } catch (e) {
    return null;
  }
}

// Convert object to URLSearchParams
export function buildUrlParams(input) {
  const params = new URLSearchParams();

  if (is.object(input)) {
    Object.entries(input).forEach(([key, value]) => {
      params.set(key, value);
    });
  }

  return params;
}

export function getUrlEncodedData(input) {
  const formBody = [];
  let keyEncoded;
  let valueEncoded;
  Object.keys(input).forEach(key => {
    keyEncoded = encodeURIComponent(key);
    valueEncoded = encodeURIComponent(input[key]);
    formBody.push(`${keyEncoded}=${valueEncoded}`);
  });
  return formBody.join('&');
}

/**
 * Redirect to a new URL
 *  - Using replace() is better
 *  - https://stackoverflow.com/questions/4744751/how-do-i-redirect-with-javascript
 * @param {string} url
 */
export function redirectTo(url) {
  if (!is.string(url)) {
    throw new Error(`wrong param type: expect a string but got ${typeof url}`);
  }

  window.location.replace(url);
}

/**
 * sends a request to the specified url from a form. this will change the window location.
 * @param {string} path the path to send the post request to
 * @param {object} params the parameters to add to the url
 * @param {string} [method=post] the method to use on the form
 */
export function postInHiddenForm(path, params, method = 'post') {
  const form = document.createElement('form');
  form.method = method;
  form.action = path;

  Object.keys(params).forEach(key => {
    const hiddenField = document.createElement('input');
    hiddenField.type = 'hidden';
    hiddenField.name = key;
    hiddenField.value = params[key];

    form.appendChild(hiddenField);
  });

  document.body.appendChild(form);
  form.submit();
}
