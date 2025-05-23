# platform-api-types

Simple type definitions for the **Quikcess Platform API**.

[![GitHub](https://img.shields.io/github/license/quikcess/platform-api-types)](https://github.com/quikcess/platform-api-types/blob/main/LICENSE)
[![npm](https://img.shields.io/npm/v/platform-api-types?color=crimson&logo=npm)](https://www.npmjs.com/package/@quikcess/platform-api-types)

## Installation

```bash
npm install @quikcess/platform-api-types
// or
yarn add @quikcess/platform-api-types
// or
pnpm add @quikcess/platform-api-types
```

## Getting Started

Using these type definitions is simple. You just need to specify the appropriate version of the API by appending `/v*` to the import path, where `*` represents your desired API version. Here are some usage examples:

```ts
// Importing the API definitions for version 1
import { APIMatch, APIStatus } from 'platform-api-types/v1';
```

You can also import only the specific parts of the module that you need. Here are some examples:

```ts
// Importing specific types for matchs and scams in version 1
import { APIMatch, APIScam } from 'platform-api-types/v1';
```

> _**Note:** The `v*` exports (`platform-api-types/v*`) include the relevant version of types for `match`, `user`, `members`, `guild`, and `status`, along with utilities and helpers._

## Project Structure

he exported types for each API version are organized into two main categories:

Types with an `API` prefix represent payloads you may receive from the REST API.
Types with a `REST` prefix represent data that is sent to and received from the REST API.
For endpoint options in the `REST` category, they follow a specific structure: `REST<HTTP Method><Action><Type>`, where the type indicates the expected return data. For example, `RESTPostAPIMatchCreateBody` or `RESTGetAPIGuildResponse`.

If a type name ends with Response, it represents the expected result when calling its corresponding route.
In this structure, the `REST` types are used to define the data sent in requests (e.g., creating a match ), while the `API` types represent the data received in responses from the API (e.g., the details of a match). This makes the distinction clear matchween what is transmitted to the API and what is returned after a request is made.