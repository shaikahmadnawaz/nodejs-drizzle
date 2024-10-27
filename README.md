# Express.js Server with TypeScript Setup

This guide will walk you through setting up an Express.js server using TypeScript. The setup includes TypeScript configuration, development dependencies, and scripts for building and running the server.

## Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed.

## 1. Initialize the Project

Create a new project folder, navigate into it, and initialize it with `npm init`.

```bash
mkdir my-express-ts-server
cd my-express-ts-server
npm init -y
```

## 2. Install the Necessary Packages

Install Express, TypeScript, and types for Node.js and Express. We’ll also install `ts-node` and `nodemon` for easier development with TypeScript.

```bash
npm install express typescript @types/node @types/express ts-node nodemon
```

## 3. Create a `tsconfig.json` File

Initialize TypeScript configuration with:

```bash
npx tsc --init
```

This will create a `tsconfig.json` file. Here are some suggested modifications to enable better compatibility for Node.js and Express:

```json
{
  "compilerOptions": {
    "target": "ES6",
    "module": "commonjs",
    "rootDir": "./src",
    "outDir": "./dist",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true
  },
  "include": ["src/**/*.ts"],
  "exclude": ["node_modules"]
}
```

- **`rootDir`**: Specifies the root directory of our source files.
- **`outDir`**: Specifies the output directory for compiled files.

## 4. Project Structure

Create the following project structure:

```
my-express-ts-server/
├── src/
│   └── index.ts
├── tsconfig.json
├── package.json
└── README.md
```

## 5. Create the Express Server

In `src/index.ts`, set up a basic Express server:

```typescript
import express, { Request, Response } from "express";

const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript with Express!");
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
```

## 6. Add Scripts to `package.json`

Add the following scripts to simplify building and running the server:

```json
"scripts": {
  "build": "tsc",
  "start": "npm run build && node ./dist/index.js",
  "dev": "nodemon --exec ts-node src/index.ts"
}
```

- **`build`**: Compiles the TypeScript code into JavaScript in the `dist` folder.
- **`start`**: Runs the `build` script, then starts the compiled server with Node.js.
- **`dev`**: Uses `nodemon` and `ts-node` to run the server in development mode with auto-reloading.

## 7. Run the Server

For development with live reloading:

```bash
npm run dev
```

For production (after compiling TypeScript files):

```bash
npm start
```

## 8. Testing the Server

Once the server is running, open a browser or use a tool like `curl` or Postman to visit `http://localhost:3000`. You should see the message:

```
Hello, TypeScript with Express!
```
