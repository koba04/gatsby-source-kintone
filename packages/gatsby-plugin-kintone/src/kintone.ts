import { KintoneRestAPIClient } from "@kintone/rest-api-client";

export const getAllRecords = async (params: {
  host: string;
  apiToken: string;
  appId: string;
  condition: string;
  orderBy?: string;
}) => {
  const { host, apiToken, appId: app, ...rest } = params;

  const client = new KintoneRestAPIClient({ host, auth: { apiToken } });
  return client.record.getAllRecords({
    app,
    ...rest,
    withCursor: true,
  });
};
