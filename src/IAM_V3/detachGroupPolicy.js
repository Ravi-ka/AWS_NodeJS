import { IAMClient, DetachGroupPolicyCommand } from "@aws-sdk/client-iam";
const iamClient = new IAMClient();

const configParams = {
  GroupName: "RDS-Admins",
  PolicyArn: "arn:aws:iam::533267138132:policy/FullAccess",
};

const executeFunction = async () => {
  try {
    const data = await iamClient.send(
      new DetachGroupPolicyCommand(configParams)
    );
    console.log(
      `Policy-${configParams.PolicyArn} has been detached from ${configParams.GroupName})`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
executeFunction();
