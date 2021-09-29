# find-my-location

Find user location from their ip

## Install

Using npm:

```console
npm install find-my-location
```

or if you prefer using yarn:

```console
yarn add find-my-location
```

## Usage

```js
import fml from 'find-my-location';

const dummy = async () => {
  const location = await fml('112.69.120.199');

  console.log(location);
};

dummy();

/*
  The response will be:
  {
    ip: '112.69.120.199',
    country_code: "JP",
    country_name: "Japan",
    region_code: "27",
    region_name: "Ōsaka",
    city: "Osaka",
    zip_code: "543-0062",
    time_zone: "Asia/Tokyo",
    latitude: 34.6851,
    longitude: 135.5136,
    metro_code: 0
  }
*/
```

## Dependencies

This library uses [freegeoapi](https://freegeoip.app/) API to function, we are allowed up to 15,000 requests per hour.
