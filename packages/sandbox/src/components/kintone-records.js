import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

export const KintoneRecords = () => {
  const data = useStaticQuery(graphql`
    query {
      allKintoneApp {
        nodes {
          CompanyName {
            value
          }
        }
      }
    }
  `);
  console.log(data);
  return (
    <ul>
      {data.allKintoneApp.nodes.map(node => (
        <li key={node.CompanyName.value}>
          {node.CompanyName.value}
        </li>
      ))}
    </ul>
  )
}
