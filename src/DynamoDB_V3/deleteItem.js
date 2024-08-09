import { DynamoDBClient, DeleteItemCommand } from "@aws-sdk/client-dynamodb";

const ddbClient = new DynamoDBClient();

const params = {
  Key: {
    id: { N: "3" },
  },
  TableName: "Employee-prod",
};

const deleteItems = async () => {
  try {
    const data = await ddbClient.send(new DeleteItemCommand(params));
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

deleteItems();
