## Database Design

This design makes the assumption that a PostgreSQL database is being used since the structure of an invoice is well defined.

_Caveat: The data types used are probably not optimal, and would require a bit more time for research._

Notes:

1. Totals and taxes are not persisted as they can drift if an operation is not wrapped in a transaction. For this reason, totals and taxes will be calculated in the business logic.

| invoice |                    |
| ------- | ------------------ |
| id      | SERIAL PRIMARY KEY |
| name    | TEXT               |
| date    | TIMESTAMPTZ        |

| phase      |                                    |
| ---------- | ---------------------------------- |
| id         | SERIAL PRIMARY KEY                 |
| name       | TEXT                               |
| invoice_id | FOREIGN KEY REFERENCES invoice(id) |

| cost_item  |                                  |
| ---------- | -------------------------------- |
| id         | SERIAL PRIMARY KEY               |
| name       | TEXT                             |
| phase_id   | FOREIGN KEY REFERENCES phase(id) |
| units      | INTEGER                          |
| unit_price | MONEY                            |
| tax_id     | FOREIGN KEY REFERENCES tax(id)   |

| tax  |                    |
| ---- | ------------------ |
| id   | SERIAL PRIMARY KEY |
| name | TEXT               |
| rate | DECIMAL            |
