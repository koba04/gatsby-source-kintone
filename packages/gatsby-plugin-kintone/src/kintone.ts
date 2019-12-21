import got from "got";

export const getAllRecords = async (params: {
  host: string;
  apiToken: string;
  appId: string;
}) => {
  const { host, apiToken, appId } = params;
  const { records } = await got(`${host}/k/v1/records.json?app=${appId}`, {
    headers: {
      "X-Cybozu-API-Token": apiToken
    }
  }).json();
  return records;
};
