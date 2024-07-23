import { IAMClient, DeleteLoginProfileCommand } from "@aws-sdk/client-iam";
const iamClient = new IAMClient();

const configParams = {
  UserName: "Ravisankar-Admin",
};

const executeFunction = async () => {
  try {
    const data = await iamClient.send(
      new DeleteLoginProfileCommand(configParams)
    );
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
executeFunction();
