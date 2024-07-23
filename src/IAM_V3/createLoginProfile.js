import { IAMClient, CreateLoginProfileCommand } from "@aws-sdk/client-iam";
const iamClient = new IAMClient();

// !Note: To use this CreateLoginProfileCommand class the user should not have any password.

const configParams = {
  UserName: "test",
  Password: "TestUser@02",
  PasswordResetRequired: false,
};

const executeFunction = async () => {
  try {
    const data = await iamClient.send(
      new CreateLoginProfileCommand(configParams)
    );
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
executeFunction();
