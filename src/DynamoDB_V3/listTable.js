import { DynamoDBClient, ListTablesCommand } from "@aws-sdk/client-dynamodb";

const client = new DynamoDBClient();

const ListTables = async () => {
  try {
    const data = await client.send(new ListTablesCommand({}));
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

ListTables();

/* --Output--
{
  '$metadata': {
    httpStatusCode: 200,
    requestId: '9KO00K2P3UDKVOHNLIJR5U9OERVV4KQNSO5AEMVJF66Q9ASUAAJG', 
    extendedRequestId: undefined,
    cfId: undefined,
    attempts: 1,
    totalRetryDelay: 0
  },
  TableNames: [ 'Employee-prod' ]
}
 */
