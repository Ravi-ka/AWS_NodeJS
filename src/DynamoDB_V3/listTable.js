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
