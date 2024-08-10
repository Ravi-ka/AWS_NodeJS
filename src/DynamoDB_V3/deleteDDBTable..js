import { DynamoDBClient, DeleteTableCommand } from "@aws-sdk/client-dynamodb";
const ddbClient = new DynamoDBClient();

const params = {
  TableName: "Employee-prod",
};

const deleteTable = async () => {
  try {
    const data = await ddbClient.send(new DeleteTableCommand(params));
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
deleteTable();

// When you delete a table, any indexes on that table are also deleted.
