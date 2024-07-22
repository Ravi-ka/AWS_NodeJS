import { IAMClient, ListPoliciesCommand } from "@aws-sdk/client-iam";

const iamClient = new IAMClient();

const params = {
  Scope: "Local", //"All" || "AWS" || "Local"
  MaxItems: Number(5),
};

const executeFunction = async () => {
  try {
    const data = await iamClient.send(new ListPoliciesCommand(params));
    console.log(data.Policies);
    return data;
  } catch (error) {
    console.log(error);
  }
};
executeFunction();

/*
--Output--

[
  {
    PolicyName: 'S3-Read-Only',
    PolicyId: 'ANPAXYKJSYZKB3JBNZN7D',
    Arn: 'arn:aws:iam::533267138132:policy/S3-Read-Only',   
    Path: '/',
    DefaultVersionId: 'v1',
    AttachmentCount: 0,
    PermissionsBoundaryUsageCount: 0,
    IsAttachable: true,
    CreateDate: 2024-07-22T16:53:20.000Z,
    UpdateDate: 2024-07-22T16:53:20.000Z
  },
  {
    PolicyName: 'FullAccess',
    PolicyId: 'ANPAXYKJSYZKPM6ZYD2FV',
    Arn: 'arn:aws:iam::533267138132:policy/FullAccess',     
    Path: '/',
    DefaultVersionId: 'v1',
    AttachmentCount: 0,
    PermissionsBoundaryUsageCount: 0,
    IsAttachable: true,
    CreateDate: 2024-07-18T19:34:01.000Z,
    UpdateDate: 2024-07-18T19:34:01.000Z
  }
]


*/
