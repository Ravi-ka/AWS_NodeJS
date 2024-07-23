import { IAMClient, CreateAccessKeyCommand } from "@aws-sdk/client-iam";
const iamClient = new IAMClient();

const configParams = {
  UserName: "Admin-User-2",
};

const executeFunction = async () => {
  try {
    const data = await iamClient.send(new CreateAccessKeyCommand(configParams));
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
executeFunction();
