import {
  DynamoDBClient,
  BatchWriteItemCommand,
} from "@aws-sdk/client-dynamodb";
const ddbClient = new DynamoDBClient();

const params = {
  RequestItems: {
    "Employee-prod": [
      {
        PutRequest: {
          Item: {
            id: { N: "1" },
            emp_name: { S: "BatchWrite1" },
          },
        },
      },
      {
        PutRequest: {
          Item: {
            id: { N: "3" },
            emp_name: { S: "BatchWrite2" },
          },
        },
      },
      {
        PutRequest: {
          Item: {
            id: { N: "4" },
            emp_name: { S: "BatchWrite3" },
          },
        },
      },
    ],
  },
};

const batchWrite = async () => {
  try {
    const data = await ddbClient.send(new BatchWriteItemCommand(params));
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

batchWrite();
