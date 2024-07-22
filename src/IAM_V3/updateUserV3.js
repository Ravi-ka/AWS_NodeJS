import { IAMClient, UpdateUserCommand } from "@aws-sdk/client-iam";

const iamClient = new IAMClient();

const updateParams = {
  UserName: "Admin-User-test",
  NewUserName: "Admin-User-2",
};

const executeFunction = async () => {
  try {
    const result = await iamClient.send(new UpdateUserCommand(updateParams));
    console.log("User updated");
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
  }
};
executeFunction();
