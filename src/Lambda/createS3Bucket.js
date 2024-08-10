import { S3Client, CreateBucketCommand } from "@aws-sdk/client-s3";
const s3Client = new S3Client();

const params = {
  Bucket: "company-name-raw-data-us-east-1-123456789",
  CreateBucketConfiguration: {
    LocationConstraint: "ap-south-1",
  },
  ACL: "private",
};

export const createBucket = async () => {
  try {
    const data = await s3Client.send(new CreateBucketCommand(params));
    console.log("Bucket created");
    return data;
  } catch (error) {
    console.log("Error occurred while creating S3 bucket: " + error);
  }
};

// update the handler for the lambda
// check all the required roles are tagged to lambda
