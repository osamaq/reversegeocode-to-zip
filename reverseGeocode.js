const GEOCODE_ROOT_URL =
  "https://maps.googleapis.com/maps/api/geocode/json?latlng=";

const buildGeocodeUrl = ({ longitude, latitude }, key) => {
  // latitude goes first in query
  return `${GEOCODE_ROOT_URL}${latitude},${longitude}&key=${key}`;
};

const handleErrors = response => {
  if (!response.ok) {
    throw Error("Network error");
  }
  return response;
};

const reverseGeocode = (region, key) => {
  return new Promise((resolve, reject) => {
    const url = buildGeocodeUrl(region, key);
    fetch(url)
      .then(handleErrors)
      .then(res => {
        return res.json();
      })
      .then(data => {
        if (data.error_message) {
          reject({ response: data.error_message });
        }
        if (data.status !== "OK") {
          reject({ response: data.status });
        }
        const { address_components } = data.results[0];
        const zipIndex = data.results[0].address_components.findIndex(
          element => {
            return element.types[0] === "postal_code";
          }
        );

        if (zipIndex === -1) {
          reject({
            response: { data: "No postal code found for this address." }
          });
        }

        let zip;

        if (
          "long_name" in address_components[zipIndex] ||
          "short_name" in address_components[zipIndex]
        ) {
          zip =
            address_components[zipIndex].long_name ||
            address_components[zipIndex].short_name;
        }

        if (!zip) {
          reject({
            response: { data: "No postal code found for this address." }
          });
        }
        resolve(zip);
      })
      .catch(err => {
        reject(err);
      });
  });
};

module.exports = reverseGeocode;
