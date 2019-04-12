# reversegeocode-to-zip

Uses [Google's geocoding API](https://developers.google.com/maps/documentation/geocoding/start) to convert longitude and latitude to a zipcode. Requires supplying a google maps [API key](https://cloud.google.com/maps-platform/).

Re-wrote from [latlng-to-zip](https://www.npmjs.com/package/latlng-to-zip) because its out of date and the author is not merging pulls.

## Installation

`npm install reversegeocode-to-zip`

## Example

```
import reverseGeocode form "reversegeocode-to-zip"

const region = {
      latitude: 36.98823868538418,
      longitude: -122.00553903356194,
};

const GOOGLE_API_KEY = "123123";

reverseGeocode(region, GOOGLE_API_KEY)
  .then(zipcode => console.log(zipcode))
  .catch(err => console.log(err));
```

## Testing

Install dev dependency jest:

`yarn`

or

`npm install`

Run tests:

`yarn test`

or

`npm test`

## Todo

1. Write tests.
