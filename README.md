# gatsby-source-kintone
A Gatsby plugin for kintone to get records from an app on a kintone environment.

## Install

```
npm install --save-dev gatsby-source-kintone
```

## Configuration

```js
// gatsby-config.js
plugins: [
    {
        resolve: `gatsby-source-kintone`,
        options: {
            host: process.env.KINTONE_HOST,
            apiToken: process.env.KINTONE_API_TOKEN,
            // TODO: support multiple apps
            app: {
                id: "{your app id}",
                query: 'Customer != ""'
            }
        }
    }
]
```

## GraphQL Query

```
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
```
