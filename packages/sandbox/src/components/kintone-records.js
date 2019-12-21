import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

export const KintoneRecords = () => {
  const data = useStaticQuery(graphql`
    query {
      allKintoneRecord {
        nodes {
          Customer {
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
      {data.allKintoneRecord.nodes.map(node => (
        <li key={node._id.value}>
          {node.Customer.value}
        </li>
      ))}
    </ul>
  )
}
