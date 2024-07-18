import AWS from "aws-sdk";

const iam = new AWS.IAM();

const params = {
  NewUserName: "Ravisankar-Admin",
  UserName: "Ravisankar",
};

iam.updateUser(params, (err, data) => {
  if (err) console.log(err);
  else console.log(data);
});
