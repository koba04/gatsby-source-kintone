import { KintoneRestAPIClient } from "@kintone/rest-api-client";

export const getAllRecords = async (params: {
  baseUrl: string;
  apiToken: string;
  appId: string;
  condition: string;
  orderBy?: string;
}): Promise<any[]> => {
  const { baseUrl, apiToken, appId: app, ...rest } = params;

  const client = new KintoneRestAPIClient({ baseUrl, auth: { apiToken } });
  return client.record.getAllRecords({
    app,
    ...rest,
    withCursor: true,
  });
};
