# reversegeocode-to-zip 

[![npm version](https://badge.fury.io/js/reversegeocode-to-zip.svg)](https://badge.fury.io/js/reversegeocode-to-zip)

Uses [Google's geocoding API](https://developers.google.com/maps/documentation/geocoding/start) to convert longitude and latitude to a zipcode. Requires supplying a google maps [API key](https://cloud.google.com/maps-platform/).

Re-wrote from [latlng-to-zip](https://www.npmjs.com/package/latlng-to-zip) because its out of date and the author is not merging pulls.

## Installation

`yarn add reversegeocode-to-zip`

or

`npm i reversegeocode-to-zip`

## Example

```
import reverseGeocode from "reversegeocode-to-zip"

const region = {
      latitude: 36.98823868538418,
      longitude: -122.00553903356194,
};

const GOOGLE_API_KEY = "123123";

reverseGeocode(region, GOOGLE_API_KEY)
  .then(zipcode => console.log(zipcode))
  .catch(err => console.log(err));
```

**Note:** don't actually put your API key in your code. Import it as an environment variable.

## Testing

Clone repo:

`git clone https://github.com/osamaq/reversegeocode-to-zip.git && cd reversegeocode-to-zip`

Install dependencies (jest):

`yarn`

or

`npm i`

Run tests:

`yarn test`

or

`npm test`

## Todo

1. Write tests.
