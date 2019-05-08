const database = require('../database');

const run = () => {
  const db = new database();
  console.log(db.get(['state']));

  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
}

module.exports = {
  run,
};
