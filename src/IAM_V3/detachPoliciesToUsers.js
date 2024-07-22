import { IAMClient, DetachUserPolicyCommand } from "@aws-sdk/client-iam";

const iamClient = new IAMClient();

const configParams = {
  PolicyArn: "arn:aws:iam::533267138132:policy/S3-Read-Only",
  UserName: "Admin-User-2",
};

const executeFunction = async () => {
  try {
    const data = await iamClient.send(
      new DetachUserPolicyCommand(configParams)
    );
    console.log(
      `Detached the policy(${configParams.PolicyArn} for ${configParams.UserName})`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

executeFunction();
