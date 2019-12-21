import crypto from "crypto";
import { getAllRecords } from "./kintone";

export const sourceNodes = async (
  { actions }: any,
  { apiToken, host, app }: any
) => {
  const { createNode } = actions;

  const records = await getAllRecords({
    host,
    apiToken,
    appId: app.id,
    query: app.query
  });

  records.forEach((record: any) => {
    createNode({
      ...record,
      id: record.$id.value,
      children: [],
      internal: {
        type: `kintoneRecord`,
        contentDigest: crypto
          .createHash(`md5`)
          .update(JSON.stringify(record))
          .digest(`hex`)
      }
    });
  });
};
