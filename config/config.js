// Copy this file as config.js in the same folder, with the proper database connection URI.
require('dotenv').config();
module.exports = {
  db_dev: 'mongodb://url:port/db',
  'secret': process.env.SECRET,
  'bearer': process.env.BEARER,
  'db': process.env.MONGO_URL,
  'AUrl': process.env.port || 80,
  'API_KEY': process.env.NEXMO_API_KEY,
  'API_SECRET': process.env.NEXMO_API_SECRET,
  'NUMBER': 84975227856,
};
