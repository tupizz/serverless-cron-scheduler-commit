const env = require('env-var');

const settings = {
  NODE_ENV: env.get('NODE_ENV').required().asString(),
  APICommitMessagesURL: env.get('APICommitMessagesURL').required().asString(),
  DbTableName: env.get('DbTableName').required().asString(),
};

module.exports = settings;
