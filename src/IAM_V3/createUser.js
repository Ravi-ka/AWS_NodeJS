import {
  IAMClient,
  GetUserCommand,
  CreateUserCommand,
} from "@aws-sdk/client-iam";

const iamClient = new IAMClient({ region: "ap-south-1" });

const params = {
  UserName: "AdminUser",
};

const run = async () => {
  try {
    const checkUser = await iamClient.send(new GetUserCommand(params));
    if (checkUser) {
      return console.log("User Already Exists");
    } else {
      const addUser = await iamClient.send(new CreateUserCommand(params));
      console.log("User Created");
      return addUser;
    }
  } catch (error) {
    console.log("Error while creating IAM", error);
  }
};

run();
