import AWS from "aws-sdk";

const iam = new AWS.IAM();

const params = {
  UserName: "test",
};

iam.createUser(params, (err, data) => {
  if (err) return console.log(err);
  else return console.log(data);
});
