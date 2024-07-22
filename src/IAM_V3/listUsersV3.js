import { IAMClient, ListUsersCommand } from "@aws-sdk/client-iam";

const iamClient = new IAMClient();

const executeFunction = async () => {
  try {
    const result = await iamClient.send(new ListUsersCommand({ MaxItems: 5 }));
    console.log(result.Users);
    // result.Users.forEach((data) => {
    //   console.log(`Username - ${data.UserName} , ${data.Arn}\n`);
    // });
    return result;
  } catch (error) {
    console.log(error);
  }
};

executeFunction();
