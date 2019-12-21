import crypto from "crypto";

export const sourceNodes = ({ actions }: any) => {
  const { createNode } = actions;
  const data = {
    field1: `a string`,
    field2: 10,
    field3: true
  };
  createNode({
    ...data,
    id: `a-node-id`,
    children: [],
    internal: {
      type: `kintoneApp`,
      contentDigest: crypto
        .createHash(`md5`)
        .update(JSON.stringify(data))
        .digest(`hex`)
    }
  });
};
