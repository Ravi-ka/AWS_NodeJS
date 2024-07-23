import { IAMClient, AddUserToGroupCommand } from "@aws-sdk/client-iam";
const iamClient = new IAMClient();

const configParams = {
  GroupName: "RDS-Admins",
  UserName: "Ravisankar-Admin",
};

const executeFunction = async () => {
  try {
    const data = await iamClient.send(new AddUserToGroupCommand(configParams));
    console.log(`${configParams.UserName} added to ${configParams.GroupName}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
executeFunction();
