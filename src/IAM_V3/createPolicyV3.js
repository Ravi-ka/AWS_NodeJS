import { IAMClient, CreatePolicyCommand } from "@aws-sdk/client-iam";

const iamClient = new IAMClient();

// const policyDocument = ;

const configParams = {
  PolicyName: "S3-Read-Only",
  Description: "This policy is to give read only access to S3 buckets.",
  PolicyDocument: JSON.stringify({
    Version: "2012-10-17",
    Statement: [
      {
        Effect: "Allow",
        Action: [
          "s3:Get*",
          "s3:List*",
          "s3:Describe*",
          "s3-object-lambda:Get*",
          "s3-object-lambda:List*",
        ],
        Resource: "*",
      },
    ],
  }),
};

const executeFunction = async () => {
  try {
    const data = await iamClient.send(new CreatePolicyCommand(configParams));
    console.log(`Policy Created:\n${data}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

executeFunction();
