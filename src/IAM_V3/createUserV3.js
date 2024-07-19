import {
  IAMClient,
  GetUserCommand,
  CreateUserCommand,
} from "@aws-sdk/client-iam";

const iamClient = new IAMClient();

const params = {
  UserName: "Admin-User",
};

const executeFunction = async () => {
  try {
    const data = await iamClient.send(new GetUserCommand(params));
    console.log("User already exists: " + data);
    return data;
  } catch (error) {
    try {
      const result = await iamClient.send(new CreateUserCommand(params));
      console.log("User created successfully");
      return result;
    } catch (error) {
      console.log("Error while creating a user : " + error);
    }
  }
};

executeFunction();
