import { expect } from '@jest/globals';

import Shopify from './shopify';

describe('Shopify utils', () => {

  beforeEach(() => {
    window.Shopify = {
      shop: 'a-test-domain',
      country: 'CA',
      locale: 'en',
    };
    window.meta = {
      product: { id: 123456 },
    };
  });

  test('shop domain from window.Shopify', () => {
    expect(Shopify.shopDomain()).toBe('a-test-domain');
  });

  test('shop domain from document.domain', () => {
    window.Shopify = undefined;
    document.domain = 'document-domain';

    expect(Shopify.shopDomain()).toBe('document-domain');
  });

  test('product id from window.meta', () => {
    expect(Shopify.productId()).toBe(123456);
  });

  test('return -1 if product id is not on page', () => {
    window.meta = undefined;
    expect(Shopify.productId()).toBe(-1);
  });

  test('no language in pathname', () => {
    expect(Shopify.languageInPathname('/')).toBe('');
  });

  test('has language and only language in pathname', () => {
    expect(Shopify.languageInPathname('/en')).toBe('en');
    expect(Shopify.languageInPathname('/En')).toBe('En');
  });

  test('has language and region in pathname', () => {
    expect(Shopify.languageInPathname('/us-en')).toBe('us-en');
  });

  test('is homepage', () => {
    expect(Shopify.isHomepage('/')).toBeTruthy();
    expect(Shopify.isHomepage('/whatever')).toBeFalsy();
  });

  test('zh-HK should be seen as zh-TW', () => {
    expect(Shopify.mapBrowserLanguageToShopifyLanguage('zh-HK')).toBe('zh-TW');
  });

  test('current region on page', () => {
    expect(Shopify.currentRegion()).toBe('CA');
  });

  test('return empty string if no current region', () => {
    window.Shopify = undefined;

    expect(Shopify.currentRegion()).toBe('');
  });

  test('current language on page', () => {
    expect(Shopify.currentLanguage()).toBe('en');
  });

  test('return empty string if no current language', () => {
    window.Shopify = undefined;

    expect(Shopify.currentLanguage()).toBe('');
  });

  test('pathname with search without language in URL', () => {
    const url = '/us-en/whatever?q=whatever';
    window.history.pushState({}, 'Test Title', url);

    expect(Shopify.pathnameWithSearch()).toBe('/whatever?q=whatever');
  });

  test('return origin pathname when there is no language in URL', () => {
    const url = '/whatever?q=whatever';
    window.history.pushState({}, 'Test Title', url);

    expect(Shopify.pathnameWithSearch()).toBe(url);
  });

});
