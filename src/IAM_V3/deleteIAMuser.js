import { IAMClient } from "@aws-sdk/client-iam";
const iamClient = new IAMClient();

const configParams = {
  UserName: "test",
};

const executeFunction = async () => {
  try {
    const data = await iamClient.send(new configParams());
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
executeFunction();

/*
Deletes the specified IAM user. Unlike the Amazon Web Services Management Console, when you delete a user programmatically, you must delete the items attached to the user manually, or the deletion fails. For more information, see Deleting an IAM user 
. Before attempting to delete a user, remove the following items:

Password (DeleteLoginProfile)

Access keys (DeleteAccessKey)

Signing certificate (DeleteSigningCertificate)

SSH public key (DeleteSSHPublicKey)

Git credentials (DeleteServiceSpecificCredential)

Multi-factor authentication (MFA) device (DeactivateMFADevice, DeleteVirtualMFADevice)

Inline policies (DeleteUserPolicy)

Attached managed policies (DetachUserPolicy)

Group memberships (RemoveUserFromGroup)
*/
