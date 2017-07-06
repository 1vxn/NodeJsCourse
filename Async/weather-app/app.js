const request = require('request');

request({
  url:'https://maps.googleapis.com/maps/api/geocode/json?address=204%20San%20Carlos%20Tlaquepaque',
  json: true
}, (error, response, body)=>{
  console.log(`Address: ${body.results[0].formatted_address}`);
  console.log(`Lat: ${body.results[0].geometry.location.lat}`);
  console.log(`Log: ${body.results[0].geometry.location.lng}`);
});
