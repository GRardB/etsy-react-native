import QueryString from 'query-string';
import { XmlEntities } from 'html-entities';

import { ETSY_API_KEY } from './config';

const baseUrl = 'https://openapi.etsy.com/v2/';
const entities = new XmlEntities();

export function getRandomListing(offset) {
  return makeApiCall('listings/active', {
    includes: 'Images:1',
    limit: 1,
    offset
  }).then(extractListing);
}

function makeApiCall(action, params = {}) {
  const queryString = QueryString.stringify({
    ...params,
    api_key: ETSY_API_KEY
  });

  const url = baseUrl + action + '?' + queryString;

  return fetch(url).then(parseJson);
}

function parseJson(response) {
  return response.json();
}

function extractListing(response) {
  const listing = response.results[0];

  return {
    listing: {
      imageUrl: listing.Images[0].url_170x135,
      price: parseFloat(listing.price),
      title: entities.decode(listing.title)
    }
  };
}
