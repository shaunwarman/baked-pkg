require('dotenv').config();

const {TOKEN} = process.env;

module.exports = {
  test() {
    console.log(`TOKEN ${TOKEN}`);
  }
}