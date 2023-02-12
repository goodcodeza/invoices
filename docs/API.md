## Invoices API

This app will fetch data from a GraphQL API that can be accessed on `/graphql`. The following queries are available.

1. `GetInvoice` - fetches a single invoice for the view on `/invoices/${id}`.

   ```graphql
   query GetInvoice($id: ID!) {
   	invoice(where: { id: "$id" }) {
   		id
   		date
   		name
   		phases {
   			costItems {
   				id
   				name
   				tax {
   					id
   					name
   					rate
   				}
   				units
   				unitPrice
   			}
   			id
   			name
   			subTotal
   			total
   			totalTax
   		}
   		subTotal
   		total
   		totalTax
   	}
   }
   ```

1. `GetInvoices` - fetch a list of invoices for the index view on `/invoices`.

   ```graphql
   query GetInvoices {
   	invoices {
   		date
   		id
   		name
   		total
   	}
   }
   ```
