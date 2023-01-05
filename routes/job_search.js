const axios = require ('axios');
const url = require ('url');
require config = require ('./config');

const decodeParams = searchParams => Array
    .from(searchParams.keys())
    .reduce((acc, key) => ({ ...acc, [key]: searchParams.get(key)}), {});

const requestURL = url.parser(req.url);

const decodedParams = decodeParams(new URLSearchParams(requestURL.search));
const { search, location, country = 'NG' } = decodeParams;

const targetURL = `${config.BASE_URL}/${country.toLowerCase()}/${config.BASE_PARAMS}&app_id=${config.APP_ID}&app_key=${config.API_KEY}&what=${search}&where=${location}`;

