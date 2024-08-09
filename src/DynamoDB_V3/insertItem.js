import { DynamoDBClient, PutItemCommand } from "@aws-sdk/client-dynamodb";

const ddbClient = new DynamoDBClient();

const params = {
  TableName: "Employee-prod",
  Item: {
    id: { N: "3" },
    emp_name: { S: "Bob" },
  },
};

const putItem = async () => {
  try {
    const data = await ddbClient.send(new PutItemCommand(params));
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

putItem();
