var AWS = require("aws-sdk");
let awsConfig = {
    "region": "ap-south-1",
    "endpoint": "http://dynamodb.ap-south-1.amazonaws.com",
    "accessKeyId": "AKIAUBXNCMZZ45NB3TWM", "secretAccessKey": "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"
};
AWS.config.update(awsConfig);

let docClient = new AWS.DynamoDB.DocumentClient();

module.exports = docClient;


