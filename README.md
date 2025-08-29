# TN3PR Stack

A modern, full-stack web development boilerplate featuring TypeScript, Next.js, Nest.js, Node.js, Redis, and Prisma. This monorepo is structured to provide a clear separation of concerns between the frontend, backend, and shared packages.

## Features

- **TypeScript**: A strongly typed programming language that builds on JavaScript.
- **Next.js**: The React Framework for building server-side rendered and static web applications.
- **Nest.js**: A progressive Node.js framework for building efficient, reliable and scalable server-side applications.
- **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Redis**: An in-memory data structure store, used as a database, cache, and message broker.
- **Prisma**: A next-generation ORM for Node.js and TypeScript.
- **pnpm Workspaces**: For managing the monorepo.
- **Docker**: For containerizing the application and its services.
- **shadcn/ui**: For beautifully designed and accessible UI components.

## Prerequisites

- [Node.js](https://nodejs.org/en/) (v20 or higher)
- [pnpm](https://pnpm.io/installation)
- [Docker](https://docs.docker.com/get-docker/)

## Getting Started

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/apcemgit/tn3pr-stack.git
    cd tn3pr-stack
    ```

2.  **Install dependencies:**

    ```bash
    pnpm install
    ```

3.  **Start the development services:**

    This will start the PostgreSQL and Redis containers required for development.

    ```bash
    docker-compose -f docker-compose.dev.yml up -d
    ```

4.  **Sync the database schema:**

    This command will push the Prisma schema to your development database.

    ```bash
    pnpm db:sync
    ```

5.  **Seed the database:**

    This will populate the database with initial data.

    ```bash
    pnpm db:seed
    ```

## Development

To start the development servers for both the frontend and backend, run:

```bash
pnpm dev
```

-   The Next.js frontend will be available at `http://localhost:3000`.
-   The Nest.js backend will be available at `http://localhost:3001`.

### Running services individually

-   **Web (Next.js):** `pnpm dev --filter web`
-   **Backend (Nest.js):** `pnpm dev --filter backend`

## Database Management (Prisma)

The `packages/database` directory contains the Prisma schema and seed scripts.

-   **Generate Prisma Client:** `pnpm db:generate`
-   **Push schema changes:** `pnpm db:sync`
-   **Seed the database:** `pnpm db:seed`
-   **Open Prisma Studio:** `pnpm db:studio`

## Monorepo Structure

-   `apps/web`: The Next.js frontend application.
-   `apps/backend`: The Nest.js backend application.
-   `packages/ui`: Shared React components using shadcn/ui.
-   `packages/database`: Prisma schema, client, and seed scripts.
-   `packages/eslint-config`: Shared ESLint configurations.
-   `packages/typescript-config`: Shared TypeScript configurations.

## Adding UI Components

To add new shadcn/ui components, run the following command from the root of the `apps/web` directory:

```bash
pnpm dlx shadcn@latest add <component-name>
```

This will add the component to the `packages/ui/src/components` directory, making it available to the `web` application.

## Linting and Formatting

-   **Lint:** `pnpm lint`
-   **Format:** `pnpm format`

## Building for Production

To build all applications and packages, run:

```bash
pnpm build
```