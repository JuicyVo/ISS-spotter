/*

-makes a single api request to retrieve user ip
-input a callback to pass back a error or callback

-returns a error if any
-ip as string null if error, example "162.235.144.177"
*/
const request = require('request');
let ip;
//209.121.34.40


const fetchMyIp = function(callback) {
  request('http://api.ipify.org?format=json', (error,response, body) => {
    if (error) return callback(error, null);

    if (response.statusCode !== 200) {
      callback(Error(`Status Code ${response.statusCode} when fetching IP: ${body}`), null);
      return;
    }
 
    const ip = JSON.parse(body).ip;
    callback(null,ip);
  });
};

const fetchCoordsByIp = function(ip, callback) {
  request(`http://ipwho.is/${ip}`, (error, response, body) => {
    if (error) return callback(error, null);

    if (response.statusCode !== 200) {
      callback(Error(`Status Cdde ${response.statusCode} when fetching IP: ${body}`), null);
      return;
    }

    // parse the returned body so we can check its information, I didnt add cosnt parsedBody idk what its there for
    const parsedBody = JSON.parse(body);
    // check if "success" is true or not
    if (!parsedBody.success) {
      const message = `Success status was ${parsedBody.success}. Server message says: ${parsedBody.message} when fetching for IP ${parsedBody.ip}`;
      callback(Error(message), null);
      return;
    }

    const longitude = JSON.parse(body).longitude;
    const latitude = JSON.parse(body).latitude;
    callback(null, {latitude, longitude});

  });
};




module.exports = {
  fetchMyIp,
  fetchCoordsByIp
};