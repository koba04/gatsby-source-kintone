import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

export const KintoneCustomerRecords = () => {
  const data = useStaticQuery(graphql`
    query {
      allKintoneCustomerAppRecord {
        nodes {
          CompanyName {
            value
          }
          _id {
            value
          }
        }
      }
    }
  `);
  return (
    <ul>
      {data.allKintoneCustomerAppRecord.nodes.map(node => (
        <li key={node._id.value}>
          {node.CompanyName.value}
        </li>
      ))}
    </ul>
  )
}
