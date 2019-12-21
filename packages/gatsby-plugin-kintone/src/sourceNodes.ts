import crypto from "crypto";
import { getAllRecords } from "./kintone";

export const sourceNodes = async (
  { actions }: any,
  { apiToken, host }: any
) => {
  const { createNode } = actions;

  let records;
  try {
    records = await getAllRecords({
      host,
      apiToken,
      appId: "6"
    });
  } catch (e) {
    console.log("error!", host, apiToken);
    console.log(e);
  }

  console.log(records);

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
