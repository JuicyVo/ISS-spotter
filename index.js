const {fetchMyIp, fetchCoordsByIp, fetchISSFlyOverTimes, nextISSTimesForMyLocation} = require('./iss'); //some reason the {} matters

// fetchMyIp((error, ip) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);
  
//   fetchCoordsByIp(ip, (error, data) => {
//     if (error) {
//       console.log("It didn't work!"), error;
//       return;
//     }
//     console.log('It worked! Returned coordinates:' , data);

//     fetchISSFlyOverTimes(data,(error, passTimes) => { //spent a hour till i realized I had the name of the function
//       if (error) {
//         console.log("It didn't work!", error);
//         return;
//       }
//       console.log('It worked! Returned flyover times:' , passTimes);
//     });
//   });
// }

// );

nextISSTimesForMyLocation((error,passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }

  console.log(passTimes);
});
