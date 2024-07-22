import { IAMClient, CreateGroupCommand } from "@aws-sdk/client-iam";

const iamClient = new IAMClient();

const configParams = {
  GroupName: "RDS-Admins",
};

const executeFunction = async () => {
  try {
    const data = await iamClient.send(new CreateGroupCommand(configParams));
    console.log(`Created User Group : ${configParams.GroupName}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
executeFunction();
