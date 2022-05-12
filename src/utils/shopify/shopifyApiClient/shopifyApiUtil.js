import {
  getPathnameWithSearch,
  getUrlEncodedData,
  redirectTo,
} from '../../urls';
import { shopifyApiConstants } from './constants';
import shopifyApiClient from './shopifyApiClient';

/**
 * @param {{[country_code]: string, [locale_code]: string}} input
 */
// eslint-disable-next-line import/prefer-default-export
export function gotoLocalization(input) {
  const data = {
    _method: 'PUT',
    return_to: getPathnameWithSearch(),
    ...input,
  };

  shopifyApiClient
    .post(shopifyApiConstants.LOCALIZATION, getUrlEncodedData(data))
    .then(res => {
      if (res.status === 200) {
        redirectTo(res.request.responseURL);
      }
    })
}
