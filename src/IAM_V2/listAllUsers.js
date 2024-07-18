import AWS from "aws-sdk";

const iam = new AWS.IAM();

iam.listUsers((err, data) => {
  if (err) console.log(err);
  else console.log(data);
});