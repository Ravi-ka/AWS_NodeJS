import { DynamoDBClient, UpdateTableCommand } from "@aws-sdk/client-dynamodb";
const ddbClient = new DynamoDBClient();

const params = {
  TableName: "Employee-prod",
  ProvisionedThroughput: {
    ReadCapacityUnits: 2,
    WriteCapacityUnits: 2,
  },
};

const updateTable = async () => {
  try {
    const data = await ddbClient.send(new UpdateTableCommand(params));
    console.log(data.Responses["Employee-prod"]);
    return data;
  } catch (error) {
    console.log(error);
  }
};
updateTable();

/*
You can only perform one of the following operations at once:

 - Modify the provisioned throughput settings of the table.

 - Remove a global secondary index from the table.

 - Create a new global secondary index on the table. After the index begins backfilling, you can use UpdateTable to perform other operations.

 Reff: https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/dynamodb/command/UpdateTableCommand/
 */
