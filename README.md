# Raters Backend JS

Welcome to the Raters Backend JS repository! This project contains the backend code for the Raters app, implemented using Node.js.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)

## Project Overview

Raters is a comprehensive platform for rating various entities. This repository contains the backend implementation of the Raters app, which provides APIs for managing users, ratings, and other related functionalities.

## Features

- User Authentication and Authorization
- CRUD operations for Ratings
- API endpoints for various entities
- Middleware for validation and error handling

## Technologies Used

- Node.js
- Nest.js
- Jest for Testing

## Used Packages

This project utilizes the following key packages:

## Used Packages

- **@dfinity/identity**: This package provides tools for managing decentralized identities. It allows users to authenticate securely and manage their identity without relying on central authorities.

- **@dfinity/candid**: Candid is a type system used for defining and validating data types in the Internet Computer ecosystem. This package facilitates the serialization and deserialization of data structures, ensuring smooth communication between the frontend and backend.

- **@dfinity/agent**: The DFINITY agent package is used for interacting with the Internet Computer's canisters (smart contracts). It provides methods for making calls to canisters, handling authentication, and managing responses efficiently.

These packages are essential for enabling secure interactions and identity management within the Raters app.

## Signature Verification

### NFID and Internet Identity (II)

This project includes functionality to verify signatures using NFID (Non-Fungible Identity) and Internet Identity (II). These mechanisms ensure secure and reliable user authentication by validating the authenticity of the signatures.

- **NFID**: A decentralized identity standard that allows users to control their identity without relying on a central authority. Signatures generated with NFID are verified to ensure they have been produced by a legitimate entity.

- **Internet Identity (II)**: A secure authentication system developed by DFINITY for the Internet Computer. It enables users to authenticate using their devices without needing traditional passwords. The backend verifies the signatures provided by Internet Identity to authenticate users securely.

For more details on implementing and utilizing these verification methods, please refer to the respective documentation and integration guides.

<h2>Installation</h2>
<p>To run this project locally, follow these steps:</p>
<ol>
    <li><strong>Clone the repository:</strong>
        <pre><code>git clone https://github.com/RatersApp/raters-backend-js.git
cd raters-backend-js</code></pre>
    </li>
    <li><strong>Install dependencies:</strong>
        <pre><code>npm install</code></pre>
    </li>
    <li><strong>Create a <code>.env</code> file in the 'services' directory and add the following environment variables:</strong>
        <pre><code>CANISTER_HOST=https://ic0.app
CANISTER_ID=
</code></pre>
    </li>
    <li><strong>Start the development server:</strong>
        <pre><code>npm run start</code></pre>
    </li>
</ol>
