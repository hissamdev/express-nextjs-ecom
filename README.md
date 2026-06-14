# Functional Ecommerce Website

Built with Next.js, Node and Express.js, this is a full stack ecommerce website.

Currently it fetches a set of dummy products from the database using raw SQL queries and renders them in a Next.js UI.

## Installation

Requirements:

- Node and pnpm installed
- Docker installed
- API testing software like Postman

Steps:

- git clone https://github.com/hissamdev/express-nextjs-ecom functional-ecom

- Install Next.js dependencies with `cd nextjs-ui && pnpm install`

- Create a `.env` file inside `/nextjs-ui` and add the following

```
DATABASE_URL=postgres://postgres:password123@127.0.0.1:5433/express-ecom
```

- Run `docker compose up -d` to start the express server and database. The compose file lives in the root folder.

- Run dev migration APIs. Open your API testing software and send a post request to the following routes:

```
http://localhost:4000/products/tables/seed

http://localhost:4000/products/seed
```

The first route creates the necessary Postgres tables and the second one seeds them with dummy data.
