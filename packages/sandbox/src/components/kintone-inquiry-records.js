import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

export const KintoneInquiryRecords = () => {
  const data = useStaticQuery(graphql`
    query {
      allKintoneInquiryAppRecord {
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
      {data.allKintoneInquiryAppRecord.nodes.map(node => (
        <li key={node._id.value}>
          {node.Customer.value}
        </li>
      ))}
    </ul>
  )
}
