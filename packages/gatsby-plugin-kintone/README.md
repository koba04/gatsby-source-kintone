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
            baseUrl: process.env.KINTONE_BASE_URL,
            // you can use multiple api tokens as comma-separated list
            apiToken: process.env.KINTONE_API_TOKEN,
            apps: [
                {
                    // You can also put the api token here
                    // apiToken: "..."
                    appId: 1,
                    appName: "Customer",
                    conditon: 'CustomerName != ""'
                    orderBy: "CustomerName desc"
                },
                {
                    appId: 2,
                    appName: "Company",
                    conditon: 'CompanyName != ""'
                },
            ]
        }
    }
]
```

## GraphQL Query

```
query {
    allKintoneCustomerAppRecord {
        nodes {
            CustomerName {
                value
            }
        }
    }
    allKintoneCompanyAppRecord {
        nodes {
            CompanyName {
                value
            }
        }
    }
}
```
