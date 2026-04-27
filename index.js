/* ASYNCHRONOUS FUNCTIONS > CALLBACK > ASYNC > PROMISE

   DEFINATION               CALL

   callback        >      callback
   async/await     >      then/catch || async/await
   promise         >      then/catch || async/await

*/

// CALLBACK > ASYNC

// define
// function devision(a, b, callback) {
//   if (b === 0) {
//     callback("Mahraj 0 ga teng emas!", null);
//   } else {
//     callback(null, a % b);
//   }
// }

// //call

// devision(10, 7, (err, data) => {
//     if(err) {
//         console.log("Error:", err)
//     } else {
//         console.log("result:", data);
//         console.log("...");
//     }
// });

// ASYNC
// // define
// async function devision(a, b) {
//   if (b === 0) {
//     throw new Error("Mahraj 0 ga teng emas!", null);
//   } else {
//     return a % b;
//   }
// }

// //call

// devision(10, 7)
//   .then((data) => {
//     console.log("Result:", data);
//     console.log("...");
//   })
//   .catch((err) => {
//     console.log("Error:", err);
//   });

// PROMISE

// define
// function devision(a, b) {
//   return new Promise((resolve, reject) => {
//     if (b === 0) {
//       reject("Mahraj 0 ga teng emas!");
//     } else {
//       setTimeout(() => {
//         resolve(a % b);
//       }, 3000);
//     }
//   });
// }

//call
// devision(10, 7)
//   .then((data) => {
//     console.log("Result:", data);
//     console.log("...");
//   })
//   .catch((err) => {
//     console.log("Error:", err);
//   });
// PROMISE HELL
// devision(10, 7)
//   .then((data) => {
//     console.log("Result:", data);
//     console.log("...");

//     devision(10, 6)
//       .then((data) => {
//         console.log("Result:", data);
//         console.log("...");

//         devision(10, 5)
//           .then((data) => {
//             console.log("Result:", data);
//             console.log("...");

//             devision(10, 4)
//               .then((data) => {
//                 console.log("Result:", data);
//                 console.log("...");
//               })
//               .catch((err) => {
//                 console.log("Error:", err);
//               });
//           })
//           .catch((err) => {
//             console.log("Error:", err);
//           });
//       })
//       .catch((err) => {
//         console.log("Error:", err);
//       });
//   })
//   .catch((err) => {
//     console.log("Error:", err);
//   });

// ASYNC/AWAIT
// define
async function devision(a, b) {
  if (b === 0) {
    throw new Error("Mahraj 0 ga teng emas!");
  } else {
    return a % b;
  }
}

//call

async function run() {
  //zone

  let result = await devision(10, 7);
  console.log("result1", result);

  result = await devision(10, 6);
  console.log("result2", result);

  result = await devision(10, 5);
  console.log("result3", result);
}
run();
