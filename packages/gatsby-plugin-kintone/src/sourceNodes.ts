import crypto from "crypto";
import { getAllRecords } from "./kintone";

export const sourceNodes = async (
  { actions }: any,
  { apiToken, baseUrl, apps }: any
) => {
  const { createNode } = actions;

  for (const app of apps) {
    try {
      const records = await getAllRecords({
        baseUrl,
        apiToken,
        ...app,
      });
      records.forEach((record: any) => {
        createNode({
          ...record,
          appId: app.appId,
          id: record.$id.value,
          children: [],
          internal: {
            type: `Kintone${app.appName}AppRecord`,
            contentDigest: crypto
              .createHash(`md5`)
              .update(JSON.stringify({ ...record, ...app }))
              .digest(`hex`),
          },
        });
      });
    } catch (e) {
      console.error(e);
      throw e;
    }
  }
};
