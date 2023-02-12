## Getting Started

In the directory where you cloned this repository, run the following commands:

1. Install the app dependencies: `npm i`
1. Set up the environment variables for your development environment: `cp .env.example .env.local`
1. Start the app: `npm run dev`

Assuming everything worked as expectd, you can now navigate to [localhost:3000](http://localhost:3000) in your favourite browser to view the app.

## Features

1. The app is built using [Next.js 13](https://beta.nextjs.org/docs) which introduced server components. This decision was made with scalability in mind - the client JS bundle does not grow with the number of dependencies added to the app.
1. Mocked GraphQL API with [msw](https://mswjs.io/). The mock is enabled through an environment variable, which can be toggled in development and production enviroments.
1. Unit tests with [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/).
1. Styles with [Tailwind CSS](https://tailwindcss.com/).
1. Code style checks with [prettier](https://prettier.io/) to keep code reviews focused, and not nitpick at indentation.
1. Code quality checks with [eslint](https://eslint.org/) to catch logic errors that can slip through reviews.
1. Pre-commit hooks with [lint-staged](https://github.com/okonet/lint-staged) and [husky](https://github.com/typicode/husky).

## Directory Structure

1. `./__tests__/`: The unit and integrations tests for the app.
1. `./app/`: The route definitions for the app.
1. `./components/`: Presentational components that can be used across different routes, or can be extracted into a design system for use across different apps.
1. `./data/`: The data fetching logic for the app. This is decoupled from the `./app/` as routing and data fetching are separate concerns.
1. `./docs`: App documentation including the database design and api definition.
1. `./mocks/`: MSW configuration and request handlers.
1. `./pages/`: Resource API definitions - not used in this app.
1. `./shared/`: logic that would be shared across the server and client - tax calculations, date and currency formatters, etc.

## Backend Work

1. [API Design](./docs/API.md)
1. [Database Design](./docs/DATABASE.md)

## Assumptions

All assumptions are made with time constraints in mind while delivering value iteratively.

1. The app will not implement any mutations - no invoices/phases can be created, updated, or deleted.
1. Business logic, such as applying tax calculations, should live on the server behind the GraphQL API. However, for an app to be dynamic - calculate tax as the customer edits an invoice on the fly - that logic will need to be shared between the client and server without duplication. This assumes that the client and server are written in the same language.
1. Fees and discounts mentioned in the "Context" section of the problem statement do not have any visible impact on the "Acceptance Criteria", and will be ignored for this phase of development.
1. Mobile first design, SEO, and Accessibilty are all crucial to provide a great customer experience. Since this app is developed under time contraints and will not see public adoption, these will be ignored.
1. Monitoring and Alerting will be ignored as well for the same reasons mentioned previously.
