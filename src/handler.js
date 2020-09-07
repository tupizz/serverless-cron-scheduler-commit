'use strict';
const settings = require('../config/settings');
const axios = require('axios');
const cheerio = require('cheerio');
const AWS = require('aws-sdk');
const dynamo = new AWS.DynamoDB.DocumentClient();
const { v4: uuid } = require('uuid');

class Handler {
  static async main(event, context, cb) {
    console.log('at', new Date().toISOString(), JSON.stringify(event, null, 2));

    const { data: html } = await axios.get(settings.APICommitMessagesURL);
    const $ = cheerio.load(html);

    const [commitMessage] = await $('#content').text().trim().split('\n');

    console.log('message', commitMessage);

    const params = {
      TableName: settings.DbTableName,
      Item: {
        id: uuid(),
        commitMessage,
        createdAt: new Date().toISOString(),
      },
    };

    await dynamo.put(params).promise();

    return {
      statusCode: 200,
      body: '',
    };
  }
}

module.exports = {
  scheduler: Handler.main,
};
