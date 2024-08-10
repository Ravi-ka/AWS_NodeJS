import { S3Client, ListBucketsCommand } from "@aws-sdk/client-s3";
const s3Client = new S3Client();

export const listBucket = async () => {
  try {
    const data = await s3Client.send(new ListBucketsCommand());
    console.log("Buckets List: " + data["Buckets"]);
    return data;
  } catch (error) {
    console.log("Error occurred while listing S3 bucket: " + error);
  }
};
