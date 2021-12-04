const _figlet = require("figlet");

function figlet(text) {
  return new Promise((resolve, reject) => {
    _figlet(text, (err, data) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(data);
    });
  });
}

module.exports = figlet;
