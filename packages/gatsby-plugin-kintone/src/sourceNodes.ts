import crypto from "crypto";
import { getAllRecords } from "./kintone";

export const sourceNodes = async (
  { actions }: any,
  { apiToken, host, apps }: any
) => {
  const { createNode } = actions;

  return Promise.all(
    apps.map(async (app: any) => {
      const records = await getAllRecords({
        host,
        apiToken,
        ...app
      });
      records.forEach((record: any) => {
        createNode({
          ...record,
          appId: app.id,
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
    })
  );
};
