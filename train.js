// >>>>>>>> Async function <<<<<<<<

console.log("Jack Ma maslahatlari:");
const list = [
  "Yaxshi talaba bo'ling", // 0-20
  "To'g'ri boshliq tanlang va ko'proq xato qiling", // 20-30
  "Ustingizda ishlashni boshlang", // 30-40
  "Siz kuchli bo'lgan narsalarni qiling", // 40-50
  "Yoshlarga investitsiya qiling", // 50-60
  "Endi dam oling! Foydasi yo'q endi)", // 60
];

// <><><><><> Async function <><><><><>
// async function maslahatBering(a) {
//   if (typeof a !== "number") throw new Error("Insert a number");
//   else if (a <= 20) return list[0];
//   else if (a > 20 && a <= 30) return list[1];
//   else if (a > 30 && a <= 40) return list[2];
//   else if (a > 40 && a <= 50) return list[3];
//   else if (a > 50 && a <= 60) return list[4];
//   else {
//     return list[5];
//   }
// }

// <><><><><> Promise function <><><><><> Promise ichida setTimeout ishlaydi
async function maslahatBering(a) {
  if (typeof a !== "number") throw new Error("Insert a number");
  else if (a <= 20) return list[0];
  else if (a > 20 && a <= 30) return list[1];
  else if (a > 30 && a <= 40) return list[2];
  else if (a > 40 && a <= 50) return list[3];
  else if (a > 50 && a <= 60) return list[4];
  else {
    return new Promise((resolve, reject) => {
      // <==Promise function
      (setTimeout(() => {
        resolve(list[5]);
      }),
        5000);
    });
  }
}

// <><><><><> async & await <><><><><>
async function run() {
  let javob = await maslahatBering(25);
  console.log(javob);
  javob = await maslahatBering(70);
  console.log(javob);
  javob = await maslahatBering(41);
  console.log(javob);
}
run();

// <><><><><> then & catch <><><><><>
// console.log("Passed here 0");
// maslahatBering(20)
//   .then((data) => {
//     console.log("Javob:", data);
//   })
//   .catch((err) => {
//     console.log("Error:", err);
//   });
// console.log("Passed here 1");

// >>>>>>>> Callback Function <<<<<<<<

// console.log("Jack Ma maslahatlari:");
// const list = [
//   "Yaxshi talaba bo'ling", // 0-20
//   "To'g'ri boshliq tanlang va ko'proq xato qiling", // 20-30
//   "Ustingizda ishlashni boshlang", // 30-40
//   "Siz kuchli bo'lgan narsalarni qiling", // 40-50
//   "Yoshlarga investitsiya qiling", // 50-60
//   "Endi dam oling! Foydasi yo'q endi)", // 60
// ];

// function maslahatBering(a, callback) {
//   if (typeof a !== "number") callback("Insert a number", null);
//   else if (a <= 20) callback(null, list[0]);
//   else if (a > 20 && a <= 30) callback(null, list[1]);
//   else if (a > 30 && a <= 40) callback(null, list[2]);
//   else if (a > 40 && a <= 50) callback(null, list[3]);
//   else if (a > 50 && a <= 60) callback(null, list[4]);
//   else {
//     setTimeout(function () {
//       callback(null, list[5]);
//     }, 5000);
//   }
// }

// console.log("Passed here 0");
// maslahatBering(65, (err, data) => {
//   if (err) console.log("ERROR:", err);
//   else {
//     console.log("Javob:", data);
//   }
// });
// console.log("Passed here 1");

//    >>>>>>>> A-TASK <<<<<<<
// function countLetter(letter, word) {
//   let count = 0;

//   for (let i = 0; i < word.length; i++) {
//     if (word[i] === letter) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(countLetter("g", "googling"));
