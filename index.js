const {fetchMyIp, fetchCoordsByIp} = require('./iss'); //some reason the {} matters
let ip;

fetchMyIp((error, ip) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }

  console.log('It worked! Returned IP:' , ip);
  
  fetchCoordsByIp(ip, (error, data) => {
    if (error) {
      console.log("It didn't work!"), error;
      return;
    }
    console.log('It worked! Returned coordinates:' , data);
  });
  
}



);









//example if it wasnt using arrow function
// function handleFetchMyIpCallback(error, ip) {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }

//   console.log('It worked! Returned IP:', ip);
// }

// fetchMyIp(handleFetchMyIpCallback);
