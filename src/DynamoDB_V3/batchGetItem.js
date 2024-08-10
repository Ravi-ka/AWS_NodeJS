import { DynamoDBClient, BatchGetItemCommand } from "@aws-sdk/client-dynamodb";
const ddbClient = new DynamoDBClient();

const params = {
  RequestItems: {
    "Employee-prod": {
      Keys: [{ id: { N: "1" } }, { id: { N: "4" } }, { id: { N: "3" } }],
    },
  },
};

const batchGetItem = async () => {
  try {
    const data = await ddbClient.send(new BatchGetItemCommand(params));
    console.log(data.Responses["Employee-prod"]);
    return data;
  } catch (error) {
    console.log(error);
  }
};
batchGetItem();

/*Raw data
 {
  'Employee-prod': [
    { emp_name: [Object], id: [Object] },
    { emp_name: [Object], id: [Object] }
  ]
}
 */
