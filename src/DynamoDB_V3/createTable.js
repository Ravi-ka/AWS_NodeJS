import { DynamoDBClient, CreateTableCommand } from "@aws-sdk/client-dynamodb";

const client = new DynamoDBClient();

const configPath = {
  TableName: "Employee-prod",
  KeySchema: [
    {
      AttributeName: "id",
      KeyType: "HASH",
    },
  ],
  AttributeDefinitions: [
    {
      AttributeName: "id",
      AttributeType: "N",
    },
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: Number(1),
    WriteCapacityUnits: Number(1),
  },
};

const CreateTable = async () => {
  try {
    const data = await client.send(new CreateTableCommand(configPath));
    console.log("DDB Table has been created");
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
CreateTable();
