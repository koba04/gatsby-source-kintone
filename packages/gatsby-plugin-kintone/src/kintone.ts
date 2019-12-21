import got from "got";

const getAllRecordsWithCursor = async (
  params: {
    cursorId: string;
    host: string;
    headers: any;
  },
  records: any[]
): Promise<any[]> => {
  const { cursorId, host, headers } = params;
  const result = await got(`${host}/k/v1/records/cursor.json?id=${cursorId}`, {
    headers
  }).json<{ records: any[]; next: boolean }>();
  const allRecords = records.concat(result.records);
  if (result.next) {
    return getAllRecordsWithCursor(
      {
        cursorId,
        host,
        headers
      },
      allRecords
    );
  }
  return allRecords;
};

export const getAllRecords = async (params: {
  host: string;
  apiToken: string;
  appId: string;
  query: string;
}) => {
  const { host, apiToken, appId: app, query } = params;

  const headers = {
    "X-Cybozu-API-Token": apiToken
  };

  const { id } = await got
    .post(`${host}/k/v1/records/cursor.json`, {
      headers,
      json: {
        app,
        query
      }
    })
    .json<{ id: string }>();

  try {
    return await getAllRecordsWithCursor(
      {
        cursorId: id,
        host,
        headers
      },
      []
    );
  } catch (e) {
    await got.delete(`${host}/k/v1/records?id=${id}`);
    throw e;
  }
};
