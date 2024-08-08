import { DynamoDBClient, DescribeTableCommand } from "@aws-sdk/client-dynamodb";

const client = new DynamoDBClient();

const params = {
  TableName: "Employee-prod",
};

const describeTable = async () => {
  try {
    const data = await client.send(new DescribeTableCommand(params));
    console.log(data.Table.KeySchema);
    return data;
  } catch (error) {
    console.log(error);
  }
};

describeTable();
