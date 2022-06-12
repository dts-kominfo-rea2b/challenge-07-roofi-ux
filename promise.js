const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = (emosi) => {
  return new Promise((resolve, reject) => {
    if (emosi == "marah") {
      (async () => {
        const sumIIX = count(await promiseTheaterIXX(), emosi);
        const sumVGC = count(await promiseTheaterVGC(), emosi);
        resolve(sumIIX + sumVGC);
      })();
    } else if (emosi == "tidak marah") {
      (async () => {
        const sumIIX = count(await promiseTheaterIXX(), emosi);
        const sumVGC = count(await promiseTheaterVGC(), emosi);
        resolve(sumIIX + sumVGC);
      })();
    } else {
      reject("Emosi tidak valid");
    }
  });
}

const count = (data, emosi) => {
  let counter = 0;

  if (emosi == "marah") {
    for (let i = 0; i < data.length; i++) {
      if (data[i].hasil == "marah") {
        counter++;
      }
    }
  } else {
    for (let i = 0; i < data.length; i++) {
      if (data[i].hasil == "tidak marah") {
        counter++;
      }
    }
  }

  return counter;
}

module.exports = {
  promiseOutput,
};
