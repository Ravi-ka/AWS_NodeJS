import { DynamoDBClient, UpdateItemCommand } from "@aws-sdk/client-dynamodb";

const ddbClient = new DynamoDBClient();

const params = {
  TableName: "Employee-prod",
  Key: {
    id: { N: "2" },
  },
  ExpressionAttributeNames: {
    "#en": "emp_name",
  },
  ExpressionAttributeValues: {
    ":n": { S: "testingData" },
  },
  UpdateExpression: "set #en = :n",
  ReturnValue: "UPDATED_NEW",
};

const updateItem = async () => {
  try {
    const data = await ddbClient.send(new UpdateItemCommand(params));
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
updateItem();
