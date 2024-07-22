import { IAMClient, AttachGroupPolicyCommand } from "@aws-sdk/client-iam";

const iamClient = new IAMClient();

const configParams = {
  GroupName: "RDS-Admins",
  PolicyArn: "arn:aws:iam::aws:policy/AmazonRDSFullAccess",
};

const executeFunction = async () => {
  try {
    const data = await iamClient.send(
      new AttachGroupPolicyCommand(configParams)
    );
    console.log(
      `Policy(${configParams.PolicyArn} added to ${configParams.GroupName})`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
executeFunction();
