import { DynamoDBClient, GetItemCommand } from "@aws-sdk/client-dynamodb";

const ddbClient = new DynamoDBClient();

const params = {
  Key: {
    id: { N: "1" },
  },
  TableName: "Employee-prod",
};

const getItems = async () => {
  try {
    const data = await ddbClient.send(new GetItemCommand(params));
    console.log(data.Item);
    return data;
  } catch (error) {
    console.log(error);
  }
};

getItems();

/* --Output-- This method will return only one matching data
{ emp_name: { S: 'updated' }, id: { N: '1' } }
 */
